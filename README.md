# Secure Cloud-Hosted Portfolio on AWS

A responsive personal portfolio built using HTML, CSS, and JavaScript, with AWS cloud services for hosting and content delivery.

## Overview

This project demonstrates how to build a static website and deploy it using Amazon Web Services (AWS). It showcases front-end development, cloud hosting concepts, and secure content delivery.

## Technologies Used

- **HTML5** — Website structure
- **CSS3** — Responsive styling and layout
- **JavaScript** — Interactive functionality
- **Amazon S3** — Static website file storage and hosting origin
- **Amazon CloudFront** — Content delivery and HTTPS support

## Features

- Responsive personal portfolio
- Projects and technical skills showcase
- Downloadable resume
- Contact and professional profile links
- Cloud-based website hosting
- Content delivery through CloudFront, when configured

## Architecture

```text
Visitor
   |
   v
Amazon CloudFront
   |
   v
Amazon S3
   |
   v
HTML, CSS, JavaScript and Images
```

CloudFront serves website content from the S3 origin. For a secure deployment, configure a CloudFront Origin Access Control (OAC) and keep the S3 bucket private.

## Project Structure

```text
secure-cloud-hosted-portfolio/
├── index.html
├── style.css
├── script.js
├── manjeet.jpg.png
├── resume.pdf
└── README.md
```

## Deployment Steps

1. Create an Amazon S3 bucket.
2. Upload the website files to the bucket.
3. Configure Amazon CloudFront with the S3 bucket as its origin.
4. Configure Origin Access Control (OAC) to restrict direct access to the S3 origin.
5. Configure CloudFront HTTPS and test the website.
6. Update the distribution whenever website content changes.

## Security Considerations

- Keep AWS credentials and access keys out of the repository.
- Prefer a private S3 bucket with CloudFront OAC.
- Use HTTPS through CloudFront.
- Apply least-privilege IAM permissions.
- Never commit API keys, passwords, or other secrets.

## What I Learned

- Structuring and deploying a static website
- Understanding Amazon S3 and CloudFront
- Understanding cloud content delivery and HTTPS
- Applying basic cloud security principles
- Managing project files with Git and GitHub

## Author

**Manjeet Singh Chaprana**

- GitHub: [Manjeetchaprana](https://github.com/Manjeetchaprana)
- LinkedIn: [Manjeet Chaprana](https://www.linkedin.com/in/manjeet-chaprana-651470256/)

---

*This project is intended as a practical demonstration of static website hosting and AWS cloud fundamentals.*
