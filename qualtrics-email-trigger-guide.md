# Qualtrics Email Trigger Workflow Guide

## Overview
This guide explains how to set up an automatic email trigger in Qualtrics that sends a scheduling poll link to participants after they complete the consent form.

---

## Step 1: Create the Scheduling Poll

### Option A: Rallly (Recommended)
1. Go to https://rallly.co
2. Click "Create a poll"
3. Configure:
   - **Title:** "CAPIS Project — Choose Your Session Time"
   - **Description:** "Select a time that works best for you. All times will automatically convert to your local timezone."
   - **Timezone:** Australia/Adelaide (UTC+9:30 / UTC+10:30)
   - **Slots:** Add weekly time slots (see scheduling-poll-design.md for full slot list)
4. Save the poll
5. Copy the share link (e.g., `https://rallly.co/poll/abc123`)

### Option B: Tally
1. Go to https://tally.so
2. Create a new form
3. Add Date and Time fields
4. List all available time slots as options
5. Add note: "All times in ACST (UTC+9:30/UTC+10:30). Please convert to your local timezone."
6. Copy the form link

---

## Step 2: Create the Email in Qualtrics

### 2.1 Create Email Content
1. In Qualtrics, go to **Library** → **Message Library**
2. Click **Create New Message**
3. Name it: "CAPIS Post-Consent Scheduling Email"
4. Set the content:

**Subject:**
```
CAPIS Project — Schedule Your Participation Session
```

**Body:**
```html
Dear ${e://Field/ResponseID},

Thank you for consenting to participate in the CAPIS Project.

Please select a time that works best for your [focus group / online meeting] session:

<a href="[PASTE RALLLY LINK HERE]" style="display:inline-block;padding:12px 24px;background-color:#2A3F5F;color:#FFFFFF;text-decoration:none;border-radius:6px;font-weight:600;">Choose Your Session Time</a>

All times will automatically convert to your local timezone. Sessions last approximately 60 minutes and will be conducted via Zoom.

If none of the available times work for you, please reply to this email and we will arrange an alternative time.

Best regards,
Andres Felipe Loaiza-Betancur
PhD Candidate | JBI, School of Public Health
Adelaide University
<a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au">andresfelipe.loaizabetancur@adelaide.edu.au</a>
```

5. Save the message

---

## Step 3: Set Up the Email Trigger

### 3.1 Create the Workflow
1. In your survey, go to **Survey Flow** (or **Workflows** in newer Qualtrics)
2. Click **Add a New Workflow**
3. Set the trigger:

**Trigger Type:** "Survey Response" or "Question Answered"

**Condition:**
```
If Q_Consent (or your consent question) = "I consent to participate"
```

### 3.2 Add the Email Action
1. In the workflow, click **Add an Action**
2. Select **Send an Email**
3. Configure:
   - **To:** `${q://QID1/ChoiceTextEntryValue}` (or the email question field)
   - **From:** `andresfelipe.loaizabetancur@adelaide.edu.au`
   - **Subject:** Select your saved message subject
   - **Body:** Select your saved message from the Library

### 3.3 Add Logic Branch (Optional)
If you want different emails for different participant groups:

```
IF Q_Group = "Athletes"
    → Send "CAPIS Athlete Scheduling Email"
IF Q_Group = "Coaches"
    → Send "CAPIS Coach Scheduling Email"
IF Q_Group = "Researchers"
    → Send "CAPIS Researcher Scheduling Email"
IF Q_Group = "Practitioners"
    → Send "CAPIS Practitioner Scheduling Email"
```

---

## Step 4: Test the Workflow

1. Send yourself a test response:
   - Click **Preview Survey** or **Test Survey**
   - Complete the consent form with your email
   - Submit the response
2. Check your email for the scheduling link
3. Verify the link opens the correct Rallly/Tally poll
4. Test selecting a time slot

---

## Step 5: Activate the Survey

1. Once testing is complete, activate the survey
2. The workflow will now automatically email participants after they consent

---

## Important Notes

### Email Delivery
- Qualtrics sends emails from `survey@qualtrics.com` by default
- Custom "From" addresses require a **Licensed Brand** or **Custom Domain** feature
- If custom "From" isn't available, use the default and update the body text to include your contact info

### Participant Privacy
- The email trigger stores the participant's email in Qualtrics
- Ensure your ethics approval covers this data collection
- Consider adding a privacy notice in the consent form

### Scheduling Poll Management
- **Rallly free tier:** Polls expire after 30 days → create new polls monthly
- **Tally free tier:** Polls persist forever → no expiration concern
- For Rallly, create polls in 4-week rolling windows (Aug 24–Sep 20, Sep 21–Oct 18, etc.)

### Zoom Integration
- After a participant selects a time, you manually create a Zoom meeting
- Send the Zoom link via email confirmation
- Alternatively, use Zoom's scheduling API for automation (requires Zoom Pro account)

---

## Workflow Diagram

```
Participant opens survey
    ↓
Reads information sheet
    ↓
Answers consent question
    ↓
If consent = "Yes":
    ↓
    Qualtrics auto-email triggered
    ↓
    Email contains scheduling poll link
    ↓
    Participant selects available time
    ↓
    You receive notification
    ↓
    You create Zoom meeting
    ↓
    You send Zoom link to participant
    ↓
    Session takes place
    ↓
If consent = "No":
    ↓
    Survey ends, no email sent
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Email not sending | Check workflow is active; verify email field is correctly mapped |
| Link not clickable | Use HTML `<a>` tag, not plain text URL |
| Times wrong timezone | Verify Rallly poll is set to Australia/Adelaide |
| Participant didn't receive email | Check spam folder; verify email address in survey response |
| Want different emails per group | Use logic branches in the workflow |
