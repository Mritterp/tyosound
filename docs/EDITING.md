# Editing content — no code required

Equipment and Featured Work live in two plain data files. Edit them directly
on github.com — no local setup needed. The site rebuilds and goes live
automatically within about a minute of saving.

## Editing equipment (add, remove, or reprice gear)

1. Go to [`src/data/equipment.json`](https://github.com/Mritterp/tyosound/blob/main/src/data/equipment.json) on GitHub.
2. Click the pencil icon (top right of the file) to edit.
3. Find the category you want (e.g. `"Mixers/Recorders"`) and its `"items"` list.
4. To add an item, copy an existing line inside `items` and change the values:
   ```json
   { "name": "New Item Name", "price": 75, "qty": 1 }
   ```
   - `qty` is optional — only include it if you have more than one (it shows as `[2X]` etc.). Omit it entirely for a single unit.
   - Every item except the last one in a list needs a comma `,` at the end of its line.
5. To remove an item, delete its whole line (including the trailing comma if it's no longer the last item... or first).
6. To add a whole new category, copy an entire `{ "name": ..., "slug": ..., "sortingOrder": ..., "items": [...] }` block and edit it. `sortingOrder` controls left-to-right, top-to-bottom position (lower = earlier) — use a number between the two categories you want it to sit between.
7. Scroll down, add a short commit message (e.g. "add Sound Devices 888"), and click **Commit changes directly to the `main` branch**.
8. Wait ~60 seconds, then check [tyosound.com](https://tyosound.com) (or the preview URL until launch) — the new item will be live.

## Editing Featured Work (add a new project)

Same process, on [`src/data/projects.json`](https://github.com/Mritterp/tyosound/blob/main/src/data/projects.json):

```json
{
  "id": "unique-slug",
  "title": "Project Title",
  "client": "CLIENT NAME",
  "role": "Production Sound",
  "cat": "production",
  "sortingOrder": 110,
  "youtubeId": "abcdEFG1234"
}
```

- `cat` must be exactly `"production"`, `"post"`, or `"events"` — it controls which service column filters the project into view.
- `youtubeId` is the part of a YouTube URL after `v=` (e.g. `youtube.com/watch?v=abcdEFG1234` → `abcdEFG1234`).
- `sortingOrder`: lower numbers appear first within their category.

## Editing Recent Posts (the Instagram-style grid)

This grid is self-hosted, not a live Instagram sync — an embedded widget
was tried first but turned out to be locked to the old Webflow domain and
wouldn't load real posts here. Add a photo on [`src/data/instagram.json`](https://github.com/Mritterp/tyosound/blob/main/src/data/instagram.json):

1. Upload the image file to `public/img/instagram/` on GitHub (use the
   **Add file → Upload files** button in that folder).
2. Add an entry to the `posts` array in `instagram.json`:
   ```json
   { "image": "/img/instagram/your-file-name.jpg", "alt": "Short description" }
   ```
3. Commit directly to `main` as above.

The grid always shows 4 columns; add or remove entries any time you post
something new worth featuring.

## If something breaks

JSON is strict about commas and quotes — a misplaced comma will break the
build. If the site stops updating after a commit:
1. Go to the [Actions tab](https://github.com/Mritterp/tyosound/actions) on GitHub — a red ✕ means the last build failed (the *old* live site stays up; nothing goes down).
2. Click the failed run to see the error, usually a JSON syntax issue near the line you edited.
3. Go back into the file, fix it, and commit again.

## Later: a friendlier editing panel

If hand-editing JSON ever gets tedious, a Webflow-style form UI (add
item → fill fields → save) is possible as a follow-up project — it needs a
small piece of separately-hosted infrastructure to handle secure login,
which we deliberately skipped for now in favor of this simpler, zero-setup
approach.
