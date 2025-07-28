# CPostLab.github.io

# Post Lab Website - Complete Setup Guide

## 🚀 Quick Start

Your website is now broken into separate, manageable files. Each lab member can edit specific pages without affecting others!

### 📁 Complete File Structure

```
post-lab-website/
├── 📄 index.html               # Home page (carousel, research description)
├── 👥 team.html                # Current team members
├── 👨‍🎓 past-members.html         # Alumni and former members
├── 🔬 research.html            # Research areas and methods
├── 📚 publications.html        # Papers and publication metrics
├── 📰 news.html                # Lab news and announcements
├── 📞 contact.html             # Contact info and directions
├── 📝 template.html            # Template for creating new pages
├── 🎨 styles.css               # All visual styling (colors, fonts, layout)
├── ⚡ shared.js                # Common JavaScript functions (optional)
├── 📋 README.md               # Basic editing instructions
├── 📖 SETUP_GUIDE.md          # This file - complete setup guide
└── 📂 images/                 # All photos and images
    ├── 📂 group/              # Group photos for homepage carousel
    │   ├── group-photo-1.jpg
    │   ├── group-photo-2.jpg
    │   ├── group-photo-3.jpg
    │   └── profile.jpg        # Rajarshi's photo
    ├── 📂 team/               # Individual member photos
    │   ├── dr-post.jpg
    │   ├── postdoc1.jpg
    │   ├── student1.jpg
    │   └── ...
    └── 📂 research/           # Research-related images
        ├── kinase-regulation.jpg
        ├── thermodynamics.jpg
        └── ...
```

## 🎯 Who Edits What

### 🏠 **index.html** - Dr. Post or Lab Manager
- Research description
- Group photos
- News banner messages

### 👥 **team.html** - Individual Members
- **Each person edits their own section**
- Add/remove members as people join/leave
- Update photos, descriptions, GitHub links

### 🔬 **research.html** - Dr. Post or Senior Researchers  
- Research area descriptions
- Current projects and methods
- Add new research directions

### 📚 **publications.html** - Anyone Can Add
- **Most frequently updated page**
- Add new papers as they're published
- Update metrics (citations, h-index)

### 📰 **news.html** - Anyone Can Add
- Lab announcements
- Student achievements
- Conference presentations
- Equipment updates

### 📞 **contact.html** - Dr. Post or Lab Manager
- Contact information
- Office locations
- Application procedures

## ✏️ Detailed Editing Instructions

### Adding a New Team Member

1. **Open `team.html`** in any text editor
2. **Find the template** (search for "TO ADD MORE TEAM MEMBERS")
3. **Copy this template:**
   ```html
   <div class="team-member">
       <div class="member-photo placeholder-img" style="width: 150px; height: 150px; margin: 0 auto 1rem;">
           Photo
       </div>
       <div class="member-name">[Full Name]</div>
       <div class="member-title">[Position/Title]</div>
       <p>[Research description]</p>
       <a href="https://github.com/username" class="github-link" target="_blank">🔗 GitHub Profile</a>
   </div>
   ```
4. **Replace placeholders** with actual information
5. **Add photo** (see photo instructions below)

### Adding a New Publication

1. **Open `publications.html`**
2. **Find the template** (search for "TO ADD NEW PUBLICATIONS")
3. **Add at the top** (keep newest first):
   ```html
   <div class="news-item">
       <div class="news-date">2025</div>
       <p>
           <strong style="color: #dcdcaa;">Your Paper Title</strong><br>
           <span style="color: #cccccc;">Author, List, Here</span><br>
           <em style="color: #ce9178;">Journal Name</em>, <strong>Volume</strong>(Issue), Pages (Year).<br>
           <a href="https://doi.org/..." target="_blank" style="color: #569cd6;">🔗 DOI: ...</a>
       </p>
   </div>
   ```

### Adding Lab News

1. **Open `news.html`**
2. **Find the template** (search for "TO ADD NEW NEWS ITEMS")
3. **Add at the top:**
   ```html
   <div class="news-item">
       <div class="news-date">July 28, 2025</div>
       <h3 style="color: #dcdcaa; margin-bottom: 0.5rem;">🎉 Your News Title</h3>
       <p style="color: #cccccc; line-height: 1.6;">
           Your news content here. You can add <strong>bold text</strong> and 
           <a href="link" style="color: #569cd6;">links</a>.
       </p>
   </div>
   ```

## 📸 Photo Management

### Photo Requirements
- **Team photos:** Square format, 500x500px minimum
- **Group photos:** Landscape, 1200x600px recommended  
- **File format:** JPG or PNG
- **File size:** Under 500KB each
- **Naming:** Use descriptive names (no spaces, use hyphens)

### Adding Team Member Photos
1. **Save photo** as `images/team/firstname-lastname.jpg`
2. **Replace placeholder** in `team.html`:
   ```html
   <!-- Replace this: -->
   <div class="member-photo placeholder-img">Photo</div>
   
   <!-- With this: -->
   <img src="images/team/firstname-lastname.jpg" alt="Your Name" class="member-photo">
   ```

### Adding Group Photos
1. **Save photos** as `images/group/group-photo-X.jpg`
2. **Update carousel** in `index.html`:
   ```html
   <div class="carousel-slide placeholder" data-image="images/group/group-photo-4.jpg">
   ```
3. **Add new dot** if adding more than 3 photos:
   ```html
   <div class="carousel-dot" onclick="goToSlide(3)"></div>
   ```

## 🎨 Customizing Appearance

### Changing Colors
All colors are defined in `styles.css`. Current VS Code theme colors:

```css
/* Main colors - edit these in styles.css */
background: #1e1e1e;        /* Dark background */
cards: #252526;             /* Card backgrounds */
text: #d4d4d4;              /* Main text */
headings: #dcdcaa;          /* Yellow headings */
accents: #569cd6;           /* Blue links/accents */
secondary: #ce9178;         /* Orange secondary text */
```

### Adding Custom Styles
Add new styles to the bottom of `styles.css`:

```css
/* Custom styles for new features */
.my-custom-class {
    background: #252526;
    padding: 1rem;
    border-radius: 8px;
}
```

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. **Create GitHub repository** named `post-lab-website`
2. **Upload all files** to the repository
3. **Enable GitHub Pages** in repository settings
4. **Your site** will be at `https://yourusername.github.io/post-lab-website`

### Option 2: University Web Hosting
1. **Contact Purdue IT** about web hosting options
2. **Upload files** to your assigned web directory
3. **Update permissions** if necessary

### Option 3: Commercial Web Hosting
1. **Choose provider** (Netlify, Vercel, etc.)
2. **Upload files** or connect to GitHub repository
3. **Configure custom domain** if desired

## 🔧 Maintenance Tasks

### Weekly
- [ ] Check for new publications to add
- [ ] Update any recent news

### Monthly  
- [ ] Review team page for accuracy
- [ ] Update upcoming events in news
- [ ] Check all links work correctly

### Semester
- [ ] Update research descriptions
- [ ] Move graduated students to past members
- [ ] Add new group photos
- [ ] Review and update contact information

## 🆘 Troubleshooting

### "Images not showing"
- ✅ Check file paths are correct
- ✅ Ensure files are uploaded to server
- ✅ Verify file names match exactly (case-sensitive)

### "Layout looks broken"  
- ✅ Make sure `styles.css` is uploaded
- ✅ Check CSS link in HTML file
- ✅ Clear browser cache

### "Page not found"
- ✅ Check file names match navigation links
- ✅ Ensure all HTML files are in same directory
- ✅ Verify server uploaded all files

### "Mobile menu not working"
- ✅ Include `shared.js` file
- ✅ Add `<script src="shared.js"></script>` to HTML

## 📱 Mobile Responsiveness

The website automatically adapts to mobile devices:
- **Navigation** becomes hamburger menu
- **Images** resize appropriately  
- **Text** adjusts for readability
- **Grids** stack on small screens

## 🔒 Security Best Practices

- **Keep backups** of all files
- **Use HTTPS** for your website URL
- **Don't include** sensitive information in public files
- **Validate** any form inputs if you add contact forms

## 🚀 Advanced Features

### Adding a New Page
1. **Copy `template.html`** to `new-page.html`
2. **Update title** and navigation
3. **Add content** using existing styling classes
4. **Update navigation** in all other HTML files

### Adding JavaScript Functionality
1. **Include shared.js** in your HTML file:
   ```html
   <script src="shared.js"></script>
   ```
2. **Use available functions** like mobile navigation, image loading
3. **Add custom JavaScript** at bottom of HTML file

### Adding Forms
Use the form template in `template.html` and modify as needed:
- Contact forms
- Application forms  
- Feedback forms

## 📊 Analytics (Optional)

To track website usage:
1. **Sign up** for Google Analytics
2. **Add tracking code** to all HTML files
3. **Monitor** visitor statistics

## 🤝 Collaboration Tips

### Multiple People Editing
- **Coordinate changes** to avoid conflicts
- **Test locally** before uploading
- **Keep backups** before major changes
- **Use descriptive commit messages** if using Git

### Version Control (Recommended)
- **Use Git/GitHub** to track changes
- **Create branches** for major updates
- **Review changes** before merging

## 📚 Learning Resources

### HTML/CSS Basics
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools](https://www.w3schools.com/)

### Advanced Features
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Basics](https://javascript.info/)

---

## 🎉 You're All Set!

Your Post Lab website is now:
- ✅ **Modular** - Each page can be edited independently
- ✅ **Maintainable** - Clear instructions for updates
- ✅ **Professional** - VS Code dark theme styling
- ✅ **Responsive** - Works on all devices
- ✅ **Accessible** - Screen reader friendly
- ✅ **Fast** - Optimized loading and images

**Questions?** Refer to `README.md` for quick editing help, or contact the person who set up your website.

**Happy editing! 🚀**
