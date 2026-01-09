#!/usr/bin/env python3
"""
Batch update blog posts to new format with answer field in front matter
"""
import re
import os

def update_blog_post(filepath):
    """Update a single blog post file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split front matter and body
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"❌ Skipping {filepath}: Invalid format")
        return False

    front_matter = parts[1]
    body = parts[2]

    # Extract answer from body
    answer_match = re.search(r'\n\s*Answer:\s*(.+?)(?:\n|$)', body, re.IGNORECASE)
    if not answer_match:
        print(f"⚠️  Skipping {filepath}: No answer found")
        return False

    answer_text = answer_match.group(1).strip()

    # Check if answer field already exists in front matter
    if re.search(r'^answer:', front_matter, re.MULTILINE):
        print(f"ℹ️  Skipping {filepath}: answer field already exists")
        return False

    # Split front matter into lines
    fm_lines = front_matter.split('\n')
    new_fm_lines = []
    answer_added = False

    for line in fm_lines:
        new_fm_lines.append(line)
        # Add answer field after difficulty or status
        if not answer_added:
            if line.startswith('difficulty:'):
                new_fm_lines.append(f'answer: "{answer_text}"')
                answer_added = True
            elif line.startswith('status:') and not any(l.startswith('difficulty:') for l in fm_lines):
                new_fm_lines.append(f'answer: "{answer_text}"')
                answer_added = True

    # If answer not added yet, add after permalink
    if not answer_added:
        new_fm_lines2 = []
        for line in new_fm_lines:
            new_fm_lines2.append(line)
            if line.startswith('permalink:'):
                new_fm_lines2.append(f'answer: "{answer_text}"')
                answer_added = True
        new_fm_lines = new_fm_lines2

    front_matter = '\n'.join(new_fm_lines)

    # Remove answer line from body
    body = re.sub(r'\n\s*Answer:\s*.+?(?:\n|$)', '\n', body, flags=re.IGNORECASE)

    # Reconstruct file
    new_content = f"---{front_matter}---{body}"

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ Updated {filepath}")
    print(f"   Answer: \"{answer_text[:50]}...\"" if len(answer_text) > 50 else f"   Answer: \"{answer_text}\"")
    return True

def main():
    posts_dir = "_posts"
    updated = 0
    skipped = 0

    # Get all markdown files in _posts
    md_files = [f for f in os.listdir(posts_dir) if f.endswith('.md')]
    md_files.sort()

    print(f"Found {len(md_files)} blog posts\n")

    for filename in md_files:
        filepath = os.path.join(posts_dir, filename)
        if update_blog_post(filepath):
            updated += 1
        else:
            skipped += 1
        print()

    print(f"{'='*60}")
    print(f"✅ Updated: {updated} files")
    print(f"⏭️  Skipped: {skipped} files")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
