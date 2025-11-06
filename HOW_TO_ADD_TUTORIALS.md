# 📝 How to Add Tutorials

Quick guide to add tutorials to your portfolio using the admin panel.

---

## 🚀 Quick Steps

1. Go to: https://abhay-portfolio-mu-nine.vercel.app/admin
2. Login with:
   - Username: `kingabh`
   - Password: `aaaa`
3. Click "Manage Tutorials"
4. Click "New Tutorial"
5. Fill in the form
6. Click "Save Tutorial"

---

## 📋 Tutorial Fields Explained

### 1. Slug (URL-friendly ID)
**Format:** `my-tutorial-name` (lowercase, hyphens only)
**Example:** `aws-lambda-guide`
**Used in URL:** `/tutorials/aws-lambda-guide`

⚠️ **Important:** Must be unique!

### 2. Title
**Format:** Regular text
**Example:** `Getting Started with AWS Lambda`
**Shows:** On card and detail page

### 3. Date
**Format:** `YYYY-MM-DD`
**Example:** `2024-11-06`
**Shows:** On card and detail page

### 4. Description
**Format:** Short summary (1-2 sentences)
**Example:** `Learn how to build serverless functions with AWS Lambda`
**Shows:** On tutorial card

### 5. Tags
**Format:** Comma-separated
**Example:** `AWS, Serverless, Lambda, Cloud`
**Shows:** As badges on card and detail page

### 6. Content
**Format:** Markdown
**Shows:** Full tutorial content on detail page

---

## ✍️ Writing Content in Markdown

### Headers
```markdown
# Main Title
## Section Title
### Subsection Title
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
```

### Code Blocks
````markdown
```javascript
function hello() {
  console.log("Hello World")
}
```
````

### Links
```markdown
[Link Text](https://example.com)
```

### Lists
```markdown
- Item 1
- Item 2
- Item 3
```

---

## 📝 Example Tutorial

### Basic Info:
- **Slug:** `aws-lambda-tutorial`
- **Title:** `Getting Started with AWS Lambda`
- **Date:** `2024-11-06`
- **Description:** `Learn how to build and deploy serverless functions with AWS Lambda`
- **Tags:** `AWS, Serverless, Lambda, Cloud`

### Content:
```markdown
# Introduction

AWS Lambda is a serverless computing service that lets you run code without provisioning servers.

## What You'll Learn

- Setting up AWS Lambda
- Creating your first function
- Deploying to production

## Prerequisites

Before starting, you'll need:
- AWS Account
- Basic JavaScript knowledge
- AWS CLI installed

## Step 1: Create Lambda Function

First, log in to AWS Console and navigate to Lambda service.

```javascript
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!')
  }
}
```

## Step 2: Test Your Function

Click the "Test" button in the Lambda console.

## Conclusion

You've successfully created your first Lambda function!

**Next Steps:**
- Add API Gateway
- Connect to database
- Set up monitoring
```

---

## 🎯 Sample Tutorials to Add

### Tutorial 1: AWS Lambda
```
Slug: aws-lambda-tutorial
Title: Getting Started with AWS Lambda
Date: 2024-11-06
Description: Learn serverless computing with AWS Lambda
Tags: AWS, Serverless, Lambda
Content: [See example above]
```

### Tutorial 2: Docker Basics
```
Slug: docker-basics
Title: Docker Basics for Beginners
Date: 2024-11-05
Description: Master containerization with Docker
Tags: Docker, DevOps, Containers
Content: [Write your content]
```

### Tutorial 3: React Hooks
```
Slug: react-hooks-guide
Title: Complete Guide to React Hooks
Date: 2024-11-04
Description: Deep dive into React Hooks
Tags: React, JavaScript, Frontend
Content: [Write your content]
```

---

## ⚠️ Common Issues

### Tutorial Not Showing
**Problem:** Added tutorial but not visible on site
**Solution:** 
1. Check slug is unique
2. Refresh the page
3. Check browser console for errors

### 404 Error on Tutorial Page
**Problem:** Tutorial page shows "Not Found"
**Solution:**
1. Verify tutorial exists in admin panel
2. Check slug matches URL exactly
3. Make sure tutorial was saved successfully

### Content Not Formatting
**Problem:** Markdown not rendering correctly
**Solution:**
1. Check markdown syntax
2. Use proper spacing (blank lines between sections)
3. Close all code blocks with ```

---

## 🔄 Editing Existing Tutorials

1. Go to admin panel
2. Click "Manage Tutorials"
3. Find the tutorial you want to edit
4. Click "Edit"
5. Make changes
6. Click "Save Tutorial"

---

## 🗑️ Deleting Tutorials

1. Go to admin panel
2. Click "Manage Tutorials"
3. Find the tutorial
4. Click "Delete"
5. Confirm deletion

---

## 💡 Tips

1. **Use descriptive slugs** - Makes URLs readable
2. **Write clear descriptions** - Helps users decide to read
3. **Add relevant tags** - Improves discoverability
4. **Format content well** - Use headers, lists, code blocks
5. **Test locally first** - Preview before publishing
6. **Keep it concise** - Break long tutorials into parts

---

## 📚 More Resources

- **Markdown Guide:** https://www.markdownguide.org/
- **Markdown Cheatsheet:** https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

---

**Happy writing! 📝**
