# ZEN Smart File Organizer
**macOS menu bar app and Chrome extension**

ZEN keeps `~/Downloads` tidy. The macOS app watches for new files, proposes the best destinations from your approved folders, and moves files with one click. The Chrome extension can add the download’s source URL to improve suggestions.

---

## Features
- **Real-time detection** of completed downloads on macOS
- **Context-aware ranking** (top 3–5 likely folders) from filename/type and, if available, source URL
- **One-click move** or **Choose Other…** for a custom destination
- **Duplicate checks** to prevent clutter
- **Privacy-first**: access is limited to folders you approve

---

## Requirements
- **macOS**: Sonoma (14) or later  
- **Xcode**: 15+ (to build/run)  
- **Google Chrome**: 119+ (only if using the extension)

---

## Installation
**macOS app**
1. Open the project in Xcode and select the **ZEN** scheme.
2. In **Signing & Capabilities**, choose your Team (App Sandbox is already configured).
3. Run with `⌘R`. ZEN appears in the menu bar.
4. On first run, grant access to **Downloads** and any **destination folders**. ZEN stores security-scoped bookmarks to avoid re-prompts.

**Chrome extension (optional)**
1. Go to `chrome://extensions` → enable **Developer mode**.  
2. **Load unpacked** → select the extension folder.  
3. Approve the **Downloads** permission when prompted.

---

## Usage
1. Download a file.  
2. ZEN shows a compact menu with **top suggestions** (e.g., *Documents/School*, *Receipts*).  
3. Click a suggestion to move immediately, or pick **Other…**. If a likely duplicate exists, ZEN offers to view/skip/replace.

---

## How It Works
- **Monitor**: watches `~/Downloads` and ignores temp/partial files until completion.  
- **Understand**: extracts hints from name (e.g., “invoice”, “resume”) and extension/MIME; optionally uses source domain from the extension.  
- **Rank**: proposes 3–5 destinations you commonly use; your choices refine future suggestions.  
- **Move**: performs the file move using security-scoped bookmarks to approved folders.

---

## Privacy & Permissions
- **Scope-limited** to **Downloads** and **folders you explicitly grant**.  
- **Local-only** processing; no uploads.  
- **Revocable** at any time in preferences.  
- **Extension** reads only download events/URLs needed for suggestions, not arbitrary page content.

---

## Troubleshooting
- **No new files detected** → Re-grant **Downloads** in preferences.  
- **“Operation not permitted”** → Add that destination folder to allowed folders.  
- **No suggestions** → Ensure the download completed; partial files are ignored.  
- **Extension inactive** → Check `chrome://extensions` (On + Downloads permission).

---

## Credits & License
Built by **Layanne El Assaad** and **Emile Al-Billeh**.
Licensed under **MIT** (see `LICENSE`).
