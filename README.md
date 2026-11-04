# Secure Cloud-Hosted Portfolio

A responsive personal portfolio website built using HTML, CSS, and JavaScript, and deployed using **Amazon S3 Static Website Hosting**.

The project demonstrates practical cloud computing concepts, static website deployment, object storage, and public access configuration on AWS.

## Live Website

[View My Portfolio](http://portfolio-site-personal.s3-website-ap-southeast-2.amazonaws.com/)

## Project Overview

This project hosts a personal portfolio website on Amazon S3 without requiring a traditional web server such as EC2 or Nginx.

The website files are stored in an S3 bucket, and S3 Static Website Hosting serves the website to visitors through its website endpoint.

## Architecture

```text
             Website Visitor
                    |
                    v
          Amazon S3 Website Endpoint
                    |
                    v
          S3 Static Website Hosting
                    |
                    v
          portfolio-site-personal
                    |
          -----------------------
          |          |          |
       HTML/CSS     JavaScript  Assets
                              (Photo, Resume)
```

## AWS Services Used

| Service | Purpose |
|---|---|
| Amazon S3 | Stores website files |
| S3 Static Website Hosting | Serves the static website |
| S3 Bucket Policy | Allows public read access to website objects |

**AWS Region:** Asia Pacific (Sydney) — `ap-southeast-2`

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Amazon Web Services (AWS)
- Amazon S3

## Project Structure

```text
secure-cloud-hosted-portfolio/
│
├── index.html
├── style.css
├── script.js
├── photo.jpeg
├── resume.pdf
└── README.md
```

## Deployment Steps

1. Create an S3 bucket in AWS.
2. Upload the website files to the bucket root.
3. Enable Static Website Hosting.
4. Set `index.html` as the index document.
5. Configure the bucket's public access settings.
6. Add an S3 bucket policy allowing `s3:GetObject`.
7. Access the website through the S3 website endpoint.

## Security Considerations

- Public read access is enabled so visitors can access the portfolio.
- The bucket policy grants object read permissions, not write permissions.
- No AWS access keys or secret credentials are stored in the repository.
- Only intended public website assets should be stored in this public bucket.

**Note:** The S3 static website endpoint supports HTTP. HTTPS requires an additional service such as Amazon CloudFront.

## Key Learning Outcomes

Through this project, I gained practical experience with:

- Deploying static websites using Amazon S3.
- Configuring S3 Static Website Hosting.
- Understanding bucket policies and IAM-based access control concepts.
- Managing public access to cloud-hosted resources.
- Understanding the difference between server-based hosting and serverless static website hosting.
- Working with AWS infrastructure through the AWS Management Console.

## Author

**Manjeet Chaprana**

- GitHub: [Manjeetchaprana](https://github.com/Manjeetchaprana)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/manjeet-chaprana-651470256/)

---

*This project is part of my hands-on learning journey in Cloud Computing and Cybersecurity.*
