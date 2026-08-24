# CAPIS Project — Scheduling Poll Design

## Platform Recommendation: Rallly

**Why Rallly over Tally:**
- Automatic timezone conversion (critical for international participants)
- Clean, professional polling interface
- Participants see availability in their local time
- Email reminders built-in
- Free tier: 30-day retention (sufficient for weekly polling)

**Limitation:** 30-day free retention → schedule in rolling 30-day windows or upgrade ($4/month for unlimited).

---

## Rallly Setup Instructions

### Step 1: Create Account
1. Go to https://rallly.co
2. Click "Create a poll" (no account needed for basic polls)
3. Or sign up for free to save and manage polls

### Step 2: Create the Poll

**Poll Title:** CAPIS Project — Participant Availability (August–April)

**Description:**
Thank you for participating in the CAPIS Project! Please select the times that work best for you. All times will automatically convert to your local timezone.

Sessions will be held via Zoom and last approximately 60 minutes.

### Step 3: Configure Settings

**Timezone:** Australia/Adelaide (UTC+9:30 / UTC+10:30 ACST/ACDT)

**Date Range:** Rolling 30-day windows

**Slot Duration:** 60 minutes

**Available Slots (Weekly Pattern):**

Create repeating weekly slots for each participant group:

#### Athletes & Coaches (Stage 2 — Focus Groups)
| Day | Time (Adelaide) | Duration |
|---|---|---|
| Monday | 7:00 AM | 60 min |
| Monday | 10:00 AM | 60 min |
| Monday | 2:00 PM | 60 min |
| Tuesday | 7:00 AM | 60 min |
| Tuesday | 10:00 AM | 60 min |
| Tuesday | 2:00 PM | 60 min |
| Wednesday | 7:00 AM | 60 min |
| Wednesday | 10:00 AM | 60 min |
| Wednesday | 2:00 PM | 60 min |
| Thursday | 7:00 AM | 60 min |
| Thursday | 10:00 AM | 60 min |
| Thursday | 2:00 PM | 60 min |
| Friday | 7:00 AM | 60 min |
| Friday | 10:00 AM | 60 min |
| Friday | 2:00 PM | 60 min |

#### Researchers & Academics (Stage 3 — Online Meetings)
| Day | Time (Adelaide) | Duration |
|---|---|---|
| Monday | 12:00 PM | 60 min |
| Monday | 3:00 PM | 60 min |
| Wednesday | 12:00 PM | 60 min |
| Wednesday | 3:00 PM | 60 min |
| Friday | 12:00 PM | 60 min |
| Friday | 3:00 PM | 60 min |

### Step 4: Share the Poll

**Option A: Direct Link**
After creating the poll, copy the share link and include it in the Qualtrics post-consent email.

**Option B: Embed in Website**
Add a page to the website with an embedded Rallly poll (requires iframe).

---

## Qualtrics Post-Consent Email Template

**Subject:** CAPIS Project — Schedule Your Participation Session

**Body:**

Dear [Participant Name],

Thank you for consenting to participate in the CAPIS Project.

Please select a time that works best for you for your [focus group / online meeting] session:

**[INSERT RALLLY POLL LINK HERE]**

All times will automatically convert to your local timezone. Sessions last approximately 60 minutes and will be conducted via Zoom.

If none of the available times work for you, please reply to this email and we will arrange an alternative time.

Best regards,
Andres Felipe Loaiza-Betancur
PhD Candidate | JBI, School of Public Health
Adelaide University
📧 andresfelipe.loaizabetancur@adelaide.edu.au

---

## Alternative: Tally (No Timezone Conversion)

If you prefer Tally (forever retention, no 30-day limit):

**Trade-offs:**
- ✅ Free forever
- ❌ No automatic timezone conversion
- ❌ Poll looks like a form, not a visual calendar
- ❌ Participants must manually convert times

**Tally Setup:**
1. Go to https://tally.so
2. Create a new form
3. Add a "Date" field and "Time" field
4. List all available time slots as options
5. Include note: "All times in Australian Central Standard Time (ACST/ACDT = UTC+9:30/UTC+10:30). Please convert to your local timezone."

---

## Workflow Summary

```
Participant completes consent form (Qualtrics)
    ↓
Qualtrics auto-email triggered
    ↓
Email contains scheduling poll link (Rallly or Tally)
    ↓
Participant selects available time
    ↓
You receive notification with participant's selection
    ↓
You confirm session via Zoom calendar invite
    ↓
Participant receives Zoom link
```

---

## Rolling 30-Day Window Strategy (Rallly)

Since Rallly free tier retains polls for 30 days:

1. **Week 1:** Create poll for Weeks 1–4 (Aug 24 – Sep 20, 2026)
2. **Week 4:** Create poll for Weeks 5–8 (Sep 21 – Oct 18, 2026)
3. **Week 8:** Create poll for Weeks 9–12 (Oct 19 – Nov 15, 2026)
4. Continue rolling through April 2027

Alternatively, upgrade to Rallly Pro ($4/month) for unlimited poll retention.

---

## Timezone Reference for Participants

| City | Timezone | Offset |
|---|---|---|
| Adelaide | ACST/ACDT | UTC+9:30 / +10:30 |
| Sydney/Melbourne | AEST/AEDT | UTC+10 / +11 |
| London | GMT/BST | UTC+0 / +1 |
| New York | EST/EDT | UTC-5 / -4 |
| Los Angeles | PST/PDT | UTC-8 / -7 |
| Tokyo | JST | UTC+9 |
| Dubai | GST | UTC+4 |
| Auckland | NZST/NZDT | UTC+12 / +13 |
