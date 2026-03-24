# **Professional Experience**

<div style="page-break-after: always;"></div>

---

## **Company**: [Endava](https://www.endava.com/)

Role: Junior DevOps Engineer (Consultant for Ericsson)  
Duration: Aug 2025 – Feb 2026

---

## **Company Introduction**

Endava is a global technology consulting company specializing in digital transformation, software engineering, and cloud infrastructure. The company works with organizations across multiple industries, helping them modernize platforms, improve system reliability, and accelerate software delivery.

During my time at Endava, I worked as a **DevOps consultant assigned to Ericsson**, supporting infrastructure automation and CI/CD pipelines used in large-scale telecommunications environments.

Ericsson systems operate at telecom scale, meaning reliability, automation, and system stability are critical for maintaining operational infrastructure.

---

## **Responsibilities and Work Processes**

In my role as a **Junior DevOps Engineer**, I worked with CI/CD pipelines, Kubernetes environments, and deployment automation tools to support Ericsson's development and infrastructure workflows.

The work environment was collaborative and followed **Agile methodologies**, with daily communication between developers, DevOps engineers, and infrastructure teams.

Tasks were tracked using internal ticketing systems and managed through sprint-based workflows.

---

## **CI/CD Pipeline Automation**

A major part of my responsibilities involved working with **Jenkins pipelines** used to automate build, test, and deployment processes.

These pipelines were responsible for:

- Automating software builds
- Running automated tests
- Packaging artifacts
- Deploying services to infrastructure environments

Working with Jenkins helped improve my understanding of **continuous integration and continuous delivery practices in large-scale systems.**

---

## **Kubernetes Workloads and GitOps**

I worked with **Kubernetes-based workloads**, helping manage application deployments and infrastructure components running inside container orchestration environments.

To support deployment workflows, we used **Argo CD and Argo Workflows**, which enabled a **GitOps-based deployment model**.

In this approach:

- Infrastructure and deployment configurations are stored in Git repositories
- Changes are reviewed and version-controlled
- Argo CD automatically synchronizes the desired state with the Kubernetes cluster

This approach improves deployment consistency and reduces manual operational work.

---

## **Build Systems and Infrastructure Support**

Another part of my work involved assisting with **build system management and migration tasks**.

This included:

- Supporting updates to existing CI/CD pipelines
- Troubleshooting pipeline failures
- Assisting with infrastructure configuration updates
- Helping maintain stability in automated build systems

Because Ericsson operates at telecom scale, these systems require high levels of reliability and careful configuration management.

---

## **Troubleshooting and Deployment Support**

I also supported engineers with **deployment troubleshooting and pipeline debugging**.

This involved identifying issues such as:

- Pipeline configuration errors
- Container build failures
- Deployment synchronization problems
- Infrastructure configuration mismatches

Working on these problems helped strengthen my understanding of **complex DevOps environments and large-scale system operations.**

---

## **Technologies and Tools Used**

During my time at Endava, I gained hands-on experience working with several modern DevOps tools and platforms:

- Jenkins
- Kubernetes
- Argo CD
- Argo Workflows
- Git
- Linux-based environments

---

## **Reflection**

Working at Endava gave me valuable exposure to **enterprise-scale DevOps practices** within the telecommunications industry.

The experience helped me understand how automation, CI/CD pipelines, and infrastructure orchestration operate in large distributed systems.

It also strengthened my troubleshooting skills and improved my ability to collaborate with developers and infrastructure engineers in a professional engineering environment.

This experience reinforced my interest in DevOps and platform engineering, particularly in areas related to **infrastructure automation, Kubernetes orchestration, and CI/CD system design.**

---

## **Company**: [Dynamist AB](https://dynamist.se/)

Role: DevOps Engineer (Internship / LIA)  
Duration: 11 months

<div style="page-break-after: always;"></div>

## **Preface**

I'm grateful to Henrik and Håkan for inviting me to join the internship at Dynamist AB. Many thanks as well to Kalle, Johan, Richard, and everyone else who made the experience so welcoming.

<div style="page-break-after: always;"></div>

## **Company Introduction**

Dynamist is an IT service company delivering efficient solutions focused on secure system architecture, infrastructure as code, and automation. The office is located in the heart of Stockholm and features a thoughtfully designed environment with unique spaces such as a cinema, a studio, and comfortable lounges for relaxation or breaks.

Employees at Dynamist AB work on maintaining security standards, managing Kubernetes infrastructure, developing applications, and working with cloud technologies, among other responsibilities.

The company's clients include: Swedbank, Handelsbanken, FENCE, EverSec, Sylog Systems, SAVR, Trustly, Sence, Braathens, Sthlm Fast, MSC Solutions, Highlander, PRICER, FUJITSU, and Holm Security.

Between July 2020 and July 2024, Dynamist achieved a 67% growth in turnover.

The organization primarily assigns employees to consulting roles at external companies, although some employees, including myself during this internship, work in-house on application development and internal platforms.

Henrik is the CEO, Håkan is the COO, and Richard is a co-founder. Other employees are engaged through standard employment contracts.

Employee responsibilities include participating in agile meetings three times a week and managing tasks through an online Kanban board. Tasks move from **“To Do” → “Doing” → “Done.”**

During development, the team uses a centralized Git version control system hosted on GitLab to collaborate efficiently and ensure version control and data integrity.

Every Monday, a demonstration meeting is held where team members present their weekly progress, giving the entire team a clear overview of ongoing work.

Dynamist AB maintains a relatively flat organizational structure. Its goal is to hire more IT engineers and continuously adopt new working methods. The company’s vision is to transform how IT systems are built and maintained.

I carried out my LIA internship in-house at the Dynamist office, with some days working remotely from home.

Henrik served as my mentor and provided support whenever needed. With more than 20 years of experience in the IT industry, he became a valuable source of knowledge and guidance throughout my internship.

<div style="page-break-after: always;"></div>

## **The Company's Work Environment Efforts**

During my LIA, I experienced the work environment at the company as both safe and positive. There was an open and inclusive culture where it was easy to ask questions and receive help when needed.

The company actively works to maintain a healthy balance between work and personal well-being, both physically and mentally. It was clear that there was an understanding of the importance of taking breaks, maintaining clear communication, and setting realistic expectations for tasks.

Meetings were held in a supportive tone, and there was room to discuss both technical challenges and workload concerns.

One appreciated benefit is that the company offers on-site massage services, which contribute to employee well-being and stress relief.

My expectations for the LIA were met in a meaningful way. I received clear tasks and a reasonable level of responsibility while also having access to guidance whenever needed. I experienced a good balance between independent work and mentorship, which contributed to a positive work environment and effective learning.

<div style="page-break-after: always;"></div>

## **The Company's Ongoing Operations And Work Processes**

### **Dynatron Project – DevOps & Technical Implementation**

During my internship, I worked on the **Dynatron project**, where I contributed to both application development and the DevOps infrastructure required to deploy and operate the system in a containerized cloud-native environment.

The application architecture included:

- Frontend interface
- Backend API
- Containerized document processing
- Infrastructure as Code deployment
- Kubernetes orchestration
- Logging and monitoring

---

### **Frontend**

The frontend was developed using **HTML, CSS, and JavaScript**.

It provides a user-friendly interface where users can upload Markdown files through a drag-and-drop upload component. The frontend communicates with the backend API to submit files and retrieve the generated PDF once processing is complete.

---

### **Backend & API**

The backend was implemented using **Python and FastAPI**.

When a user uploads a Markdown file:

1. The file is sent to the backend API.
2. A containerized process is triggered.
3. The container converts the Markdown file to PDF using **Sphinx and LaTeX**.
4. The generated PDF is returned from the container to the backend.
5. The backend returns the final document to the frontend for download.

The system was designed to run in **containerized environments**, making it portable and suitable for deployment in Kubernetes.

---

### **Containerization**

Application components were containerized using **Docker**.

This allowed dependencies such as:

- LaTeX
- Sphinx
- Pandoc
- Python libraries

to run consistently across development and production environments.

Containerization ensured reproducible builds and simplified deployment to Kubernetes clusters.

---

### **Infrastructure as Code and Deployment**

A significant part of my work involved deploying and managing the application infrastructure using **Infrastructure as Code (IaC)** principles.

#### **Terraform**

Terraform was used to define and manage infrastructure resources declaratively. This allowed the environment to be reproducible, version-controlled, and automated.

Using Terraform improved infrastructure consistency and reduced manual configuration work.

#### **Helm**

Helm charts were used to package and deploy the application to Kubernetes.

Helm allowed us to manage Kubernetes resources such as:

- Deployments
- Services
- ConfigMaps
- Secrets

Using Helm also simplified configuration management and made it easier to deploy the application across different environments.

---

### **Kubernetes Deployment**

The application was deployed to a **Kubernetes cluster**, providing a scalable and resilient runtime environment.

This involved:

- Writing Helm configurations
- Managing Kubernetes deployments and services
- Handling secrets securely
- Configuring containerized workloads

Working with Kubernetes provided hands-on experience with **cloud-native infrastructure and container orchestration.**

---

### **Logging and Monitoring**

I implemented **real-time logging for the FastAPI backend**, allowing application activity and errors to be monitored during runtime.

This helped detect issues early and simplified troubleshooting during development and deployment.

---

### **Testing and Code Quality**

To ensure application reliability, I implemented **unit tests using Pytest**.

Tests verified that application functionality behaved correctly and helped prevent regressions when new features were added.

Test coverage monitoring also helped maintain code quality throughout development.

---

### **Environment Configuration and Security**

Sensitive information such as API tokens and configuration values were stored in **environment variables**.

This prevented secrets from being stored directly in the codebase and made the application more secure and easier to configure across multiple environments.

---

### **Additional Contributions**

In addition to the Dynatron project, I contributed to several smaller internal projects:

- Developed **CLI commands for internal Python tools**
- Designed and implemented improvements for **Dynamist’s official website**
- Built a **Python automation script using the Phabricator API** to automate Kanban board management

These contributions helped improve internal workflows and automation within the development environment.

<div style="page-break-after: always;"></div>

## **Reflections**

My main goal during the internship was to successfully build the file conversion functionality, which I completed by the end of the LIA period.

I expected to learn how to structure a well-organized project and apply best practices when developing an application. After this experience, I feel significantly more confident in structuring Python projects and building production-ready applications.

This internship matched my expectations and long-term goals. I enjoy building systems and solving technical problems, which is why the DevOps and infrastructure field feels like a natural direction for my career.

I had a significant level of responsibility in the project, building several components from scratch and ensuring the system was reliable and stable.

Since I had already studied Python programming and unit testing during my DevOps education, I was able to quickly start contributing to the Dynatron project.

I also learned several best practices in Python development. For example, instead of relying heavily on subprocesses, I was encouraged to find suitable Python libraries that would make the application more maintainable and portable.

Because I worked with document conversion pipelines, I became familiar with tools such as **LaTeX, Sphinx, Cookiecutter, and Pandoc**.

I also gained practical experience working with Python modules such as:

- tempfile
- file handling
- tarfile

especially within **containerized environments**.

Overall, the backend development went very well. The frontend also worked well, although I believe the JavaScript code could have been written in a cleaner and more maintainable way.

Moving forward, I plan to continue applying my knowledge of **FastAPI, containerization, and infrastructure automation** in future DevOps roles.

---

## **Conclusion**

This internship at Dynamist AB has been a major step in my development as a DevOps engineer. It allowed me to apply theoretical knowledge in real-world scenarios, work with modern cloud-native technologies, and gain practical experience with infrastructure automation.

I leave this experience with greater confidence, clearer career direction, and a strong technical foundation for my future in the technology industry.
