# CPostLab.github.io

# Post Lab Website Management Guide

## 📁 File Structure

```
post-lab-website/
├── README.md                 # This file - instructions for updating the site
├── styles.css               # Shared styling (colors, fonts, layout)
├── index.html               # Home page with carousel and research description
├── team.html                # Team members and their information
├── research.html            # Research areas and methods
├── publications.html        # Recent publications and metrics
├── news.html                # Lab news and announcements
├── contact.html             # Contact information and directions
└── images/                  # Directory for photos and images
    ├── group/               # Group photos for carousel
    │   ├── group-photo-1.jpg
    │   ├── group-photo-2.jpg
    │   └── profile.jpg
    ├── team/                # Individual member photos
    │   ├── dr-post.jpg
    │   ├── postdoc1.jpg
    │   └── student1.jpg
    └── research/            # Research-related images
        ├── kinase-regulation.jpg
        └── thermodynamics.jpg
```

## 🎯 How to Update Different Sections

### 🏠 **Home Page (index.html)**
**Who should edit:** Dr. Post or designated lab manager  
**What to update:**
- Research description text
- Group photos in the carousel
- News banner messages

### 👥 **Team Page (team.html)**
**Who should edit:** Individual team members can edit their own sections  
**What to update:**
- Add/remove team members
- Update names, titles, descriptions
- Replace placeholder photos
- Update GitHub/profile links

### 🔬 **Research Page (research.html)**
**Who should edit:** Dr. Post or senior researchers  
**What to update:**
- Research area descriptions
- Current projects
- Research methods
- Add new research areas

### 📚 **Publications Page (publications.html)**
**Who should edit:** Any lab member can add new publications  
**What to update:**
- Add new publications (keep newest first)
- Update metrics (total publications, citations, h-index)
- Update external links

### 📰 **News Page (news.html)**
**Who should edit:** Any lab member can add news  
**What to update:**
- Add new news items (keep newest first)
- Update upcoming events
- Remove outdated news

### 📞 **Contact Page (contact.html)**
**Who should edit:** Dr. Post or lab manager  
**What to update:**
- Contact information
- Office locations
- Application instructions

## ✏️ Quick Editing Guide

### Adding a New Team Member

1. Open `team.html`
2. Find the "TO ADD MORE TEAM MEMBERS" comment
3. Copy the template and fill in:
   ```html
   <div class="team-member">
       <div class="member-photo placeholder-img" style="width: 150px; height: 150px; margin: 0 auto 1rem;">
           Photo
           <!-- TO ADD PHOTO: Replace with:
           <img src="images/team/new-member.jpg" alt="Member Name" class="member-photo">
           -->
       </div>
       <div class="member-name">[Full Name]</div>
       <div class="member-title">[Position/Title]</div>
       <p>[Description of research and background]</p>
       <a href="https://github.com/username" class="github-link" target="_blank">🔗 GitHub Profile</a>
   </div>
   ```

### Adding a New Publication

1. Open `publications.html`
2. Find the "TO ADD NEW PUBLICATIONS" comment
3. Copy the template and fill in:
   ```html
   <div class="news-item">
       <div class="news-date">[YEAR]</div>
       <p>
           <strong style="color: #dcdcaa;">[Publication Title]</strong><br>
           <span style="color: #cccccc;">[Author List]</span><br>
           <em style="color: #ce9178;">[Journal Name]</em>, <strong>[Volume]</strong>([Issue]), [Pages] ([Year]).<br>
           <a href="[DOI URL]" target="_blank" style="color: #569cd6; text-decoration: none;">
               🔗 DOI: [DOI Number]
           </a>
       </p>
   </div>
   ```

### Adding Lab News

1. Open `news.html`
2. Find the "TO ADD NEW NEWS ITEMS" comment
3. Copy the template and fill in:
   ```html
   <div class="news-item">
       <div class="news-date">[Date]</div>
       <h3 style="color: #dcdcaa; margin-bottom: 0.5rem;">[Icon] [News Title]</h3>
       <p style="color: #cccccc; line-height: 1.6;">
           [News content and details]
       </p>
   </div>
   ```

## 📸 Adding Photos

### For Team Members:
1. Save your photo as `images/team/your-name.jpg`
2. Replace the placeholder div with:
   ```html
   <img src="images/team/your-name.jpg" alt="Your Name" class="member-photo">
   ```

### For Group Photos:
1. Save photos as `images/group/group-photo-X.jpg`
2. Update the `data-image` attribute in the carousel slide

### Photo Guidelines:
- **Team photos:** Square format, 500x500 pixels minimum
- **Group photos:** Landscape format, 1200x600 pixels recommended
- **File format:** JPG or PNG
- **File size:** Keep under 500KB for faster loading

## 🎨 Customizing Colors and Styles

All visual styling is in `styles.css`. The current color scheme uses VS Code dark theme:

- **Background:** `#1e1e1e`
- **Cards:** `#252526`
- **Text:** `#d4d4d4`
- **Accents:** `#569cd6` (blue), `#dcdcaa` (yellow), `#ce9178` (orange)

To change colors, edit the CSS variables in `styles.css`.

## 🚀 Publishing Your Changes

1. **Test locally:** Open any HTML file in your browser to preview
2. **Upload to server:** Upload all files to your web hosting service
3. **Update links:** Make sure all internal links work correctly

## 🆘 Troubleshooting

### Common Issues:

**Images not showing:**
- Check file paths are correct
- Ensure images are in the right folder
- Verify file names match exactly (case-sensitive)

**Layout looks broken:**
- Make sure `styles.css` is in the same folder as HTML files
- Check that the CSS link is correct in each HTML file

**Navigation not working:**
- Verify all HTML files are in the same folder
- Check that file names match the navigation links

## 📋 Monthly Maintenance Checklist

- [ ] Add new publications
- [ ] Update team member information
- [ ] Add recent lab news
- [ ] Check for broken links
- [ ] Update upcoming events
- [ ] Review and update research descriptions

## 🤝 Getting Help

- **For technical issues:** Contact the person who set up the website
- **For content questions:** Discuss with Dr. Post
- **For design changes:** Edit `styles.css` or ask for help

## 📝 Best Practices

1. **Keep it current:** Update regularly rather than waiting months
2. **Be consistent:** Follow the existing format and style
3. **Test changes:** Always preview before publishing
4. **Backup:** Keep copies of your files
5. **Coordinate:** Let others know when you're making major changes

---

*This website was designed to be maintainable by lab members with basic HTML knowledge. Each page is self-contained and can be edited independently.*
