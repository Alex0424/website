# **Professional Experience**

---

## **Company**: [Dynamist AB](https://dynamist.se/)

Role: DevOps Engineer (Ongoing Internship / LIA)  
Duration: 9 months (currently in progress)

<div style="page-break-after: always;"></div>

# **Internship - Report**

## **Preface**

I'm grateful to Henrik and Håkan for inviting me to join the internship at Dynamist AB. Many thanks as well to Kalle, Johan, Richard and everyone else who made the experience so welcoming.

<div style="page-break-after: always;"></div>

## **Company Introduction**

Dynamist is an IT service company delivering efficient solutions focused on secure system architecture, infrastructure as code, and automation. The office is located in the heart of Stockholm and features a beautifully designed environment with unique spaces such as a cinema, a studio, and cozy lounges for relaxation or breaks.

Employees at Dynamist AB work on patching security standards, managing Kubernetes servers, developing applications, and working with cloud technologies, among other tasks.

The company's clients include: Swedbank, Handelsbanken, FENCE, EverSec, Sylog Systems, SAVR, Trustly, Sence, Braathens, Sthlm Fast, MSC Solutions, Highlander, PRICER, FUJITSU, and Holm Security.

Between July 2020 and July 2024, Dynamist achieved a 67% growth in turnover.

The organization is primarily structured to assign employees to consulting roles at external companies, although some employees, including myself, work in-house on application development.

Henrik is the CEO, Håkan is the COO, and Richard is a co-founder. Other employees are engaged through standard employment contracts.

Employee responsibilities include participating in agile meetings three times a week and managing tasks via an online Kanban board. Tasks move from “To Do” to “Doing” to “Done.” During development, we use a centralized Git version control system on GitLab to collaborate and prevent data loss.

Every Monday, a demonstration is held where team members present their weekly progress, providing a clear overview of accomplishments.

Dynamist AB maintains a flat organizational structure. Its goal is to hire more IT engineers and continuously adopt new working methods. The company’s vision is to transform how IT systems are built and maintained.

I carried out my LIA in-house at the Dynamist office, with some days working remotely from home.

Henrik served as my mentor and provided support whenever needed. With over 20 years of experience in the IT industry, he became a valuable source of knowledge and guidance during my internship.

<div style="page-break-after: always;"></div>

## **The Company's Work Environment Efforts**

During my LIA, I experienced the work environment at the company as both safe and positive. There was an open and inclusive culture where you could ask questions and get help when needed.

The company actively works to maintain a good balance between work and health, both physical and mental. For example, it was clear that there was an understanding of the importance of taking breaks, clear communication, and setting realistic expectations for tasks. Meetings were held in a supportive tone, and there was space to discuss both technical issues and workload.
One nice benefit is that the company offers on-site massage, which contributes to employee well-being and stress relief.

My expectations for the LIA were met in a meaningful way. I received clear tasks and a reasonable amount of responsibility, while also having access to guidance when needed. I experienced a good balance between independent work and support from my supervisor, which contributed to a positive work environment and effective learning.

<div style="page-break-after: always;"></div>

## **The Company's Ongoing Operations And Work Processes**

**Dynatron Project - Technical Implementation**

The application included a frontend, backend, API, containerization, real-time logging, Kubernetes deployment, and secure configuration handling.

- Frontend: Built from scratch using HTML, CSS, and JavaScript. Users can access the site and upload a file by dragging it into the designated upload area.

- Backend & API: The uploaded file is sent through an API and handled by the backend using Python. A containerized process is launched, which uses Sphinx and LaTeX dependencies to convert the file and its metadata from Markdown to PDF. Once the conversion is complete, the file is returned from the container to the backend, then forwarded to the frontend and finally delivered to the user.

- Unit Testing: I implemented tests using Pytest and monitored test coverage to ensure the code worked correctly. This helped identify issues early and maintain code stability as new features were added.

- Logging: I set up real-time monitoring for FastAPI, allowing me to detect errors as they occurred and quickly resolve them.

- Environment Variables: Sensitive information, such as API tokens, was stored in environment variables to keep the application secure and configurable across different environments.

- Kubernetes Deployment: I deployed the application to a Kubernetes cluster, ensuring it ran in a scalable, resilient environment. This included writing configuration files, managing secrets securely, and using Kubernetes best practices for deployment and service exposure.

**In addition to the Dynatron project, I also contributed to several smaller projects, such as:**

- Developed CLI commands for Python programs.
- Designed and implemented new pages, as well as improved existing ones, for Dynamist’s official website.
- Created a Python script using the Phabricator API to automate Kanban board management.

<div style="page-break-after: always;"></div>

## **Reflections**

My goal was to build the file conversion functionality, and I successfully completed it by the end of the LIA period.

I expected to learn how to structure a well-organized project and apply best practices when developing an application. After this experience, I feel much more confident in structuring a Python project if I were to develop a new application in the future.

This experience definitely matched my expectations and long-term goals, as I’ve always enjoyed building things, something programming allows me to do. I can clearly see myself working in this industry going forward.

I had a significant level of responsibility for this project, as I built many components from scratch and was responsible for ensuring the application was robust and stable.

Since I had already learned Python programming and unit testing in my DevOps course, I was well-prepared to start coding, which was beneficial for the Dynatron project.

I also learned a lot about best practices in Python. For example, instead of relying on subprocesses, I was encouraged to find Python libraries to make the application more compatible and maintainable.

Because I was working with file conversions, I became familiar with tools such as LaTeX, Sphinx, Cookiecutter, and Pandoc. I also gained practical experience with Python modules like tempfile, file handling, and working with tarfiles—especially in containerized environments.

I believe the backend part of the project went very well for me. The frontend also went well, but I wish I had written cleaner, more readable JavaScript code.

Moving forward, I plan to apply my FastAPI knowledge when seeking future roles. It's a powerful backend framework in Python that enables fast and efficient application development.

## **Conclusion**

This internship at Dynamist AB has been a major step in my development as a DevOps engineer. It has allowed me to apply my theoretical knowledge in real-world scenarios, learn best practices, and work with modern tools and technologies. I’m leaving this experience with more confidence, clearer direction, and a strong foundation for my future in the tech industry.
