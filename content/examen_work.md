[link](https://chasacademy.instructure.com/courses/275/assignments/1021)

# Dynatron Final Examen Project

Namn: Alexander Lindholm
Utbildning: DevOps Engineer - Chas Academy
Handledare: Henrik Holmboe

<br>

## Summary (Abstract)

Sammanfattning (abstract) – OBS SKALL SKRIVAS PÅ
ENGELSKA.
Detta är en sida som skall sitta direkt efter titelsidan. Den innehåller först och främst en
sammanfattning av innehållet i rapporten. Sammanfattningen ska innehålla
bakgrund/inledning, beskrivning av examensarbetets genomförande samt resultat i korthet.
I sammanfattningen ska det endast redovisa resultat, slutsatser eller annat som finns med i
själva arbetet. Finns det inte med i texten ska det inte stå med här.

<br>

Frontend

- Whats visible on the webpage: text, background-color, buttons, and user actions e.g.: if a user click on a button then trigger something.

FastAPI - Fast Application Programing Interface

- A program that listens to and sends back request from other computers or programs e.g.: HTTPS Requests.

Backend

- Handles application or website data request by processing it throw a function on a server.

Python

- Programing language that is mostly used for backend logic.

Nginx - A webserver

- Server that redirect request to frontend, backend, databases, and caching servers.

Redis - Caching database

- Caching database that caches JSON.

Pytest - Unit-testing tool

- Pytest is a tool for testing python code, It will test the code and make sure the test is returning answer is correct. Collecting test coverage of 100% means that Unit-Test is testing all areas of the code.

Docker & Podman

- Docker and Podman are similar Runtime Engines that hosts containers.

Docker Compose

- Docker compose is reading a compose.yml file using Runtime Engine to start multiple containers simultaneously.

Kubernetes

- Cluster of containers that automates the deployment, scaling, management of replicas.

Logging

- Reading or recording data on e.g.: a server to find out if there are any bugs or errors.

# Innehåll

- Sammanfattning (abstract) ... 2

1. Inledning ... 1

   1.1 Bakgrund ... 1

   1.2 Syfte ... 1

   1.3 Problemformulering ... 1

   1.4 Avgränsningar och fokus ... 2

   1.5 Metod/Arbetssätt... 2

2. Resultat ... 4

3. Diskussion ... 4

4. Slutsatser ... 5

   5.1 Rekommendationer ... 5

5. Referenslista ... 6

   Bilagor ... 7

## 1.0 Introduction

This project was conducted at Dynamist, a company that currently spends a significant amount of time manually building and converting documentation files into PDFs. This manual process is inefficient, especially considering the growing need for accurate and professional documentation. The goal of this project is to address that issue through automation.

## 1.1 Background

Today at Dynamist, documentation is created in Markdown (MD) format and then manually converted into PDF for use in internal wikis and other essential materials. This process takes a lot of time and effort. That is why it has been identified as a problem worth solving. Automating this task could significantly improve workflow and reduce the time spent on routine tasks.

## 1.2 Purpose

The purpose of this project is to automate the generation of PDF documents from Markdown files by developing a solution called Dynatron.

At Dynamist, documentation is written in Markdown format, but to make it more professional and accessible, it needs to be converted into PDF. Therefore, the idea is to create a web-based platform where employees can upload a Markdown file and receive a well-formatted PDF document in return. This system would be easy to use and accessible for all employees.

## 1.3 Problem formulation

The following questions outline the key problems and challenges to be addressed:

How can we ensure high uptime for the application?

- By using a Kubernetes cluster with replicated containers.

How can the Dynatron stack be deployed to Kubernetes on AWS Cloud?

- This requires a detailed plan outlining the deployment process.

How can we automate the deployment using Kubernetes and CI/CD?

- This part has not yet been implemented, and it's still uncertain if it will be due to time constraints.

How can we ensure the application is stable and robust?

- By implementing unit tests, we can test the code before deployment to improve quality and reliability.

## 1.4 Boundaries and Focus

It is unlikely that full CI/CD implementation will be included due to limited time. The main focus is on improving the application itself. This includes ensuring that the Docker Compose file works correctly and that all containers (frontend, backend, caching server, web server) integrate properly.

## 1.5 Method/Approach

3. Resultat
   Här redovisar du/ni objektivt och utan värderingar era iakttagelser på ett strukturerat sätt
   vad du/ni kommit fram till i din/er undersökning. Hur blev det? Vad blev resultatet?
   När du redovisar ditt/ert resultat ska du inte blanda in egna upplevelser, känslor eller någon
   analys. Du ska enbart beskriva utfallet på er undersökning/arbete och enbart det som är
   centralt för resultatet. Så den här texten och/eller redovisning är saklig, formell och ”torr” och
   du sparar dina personliga reflektioner till texten under rubriken Diskussion. Mottagaren ska
   kunna se en röd tråd som löper från Bakgrund med syftet, avgränsningar och
   metodbeskrivning, och tydligt se hur detta leder fram till resultatet.
   Har du/ni ställt frågor enligt ett frågeformulär är det lämpligt att redovisa svaren i en figur
   eller tabell.
4. Diskussion
   Här formulerar du svaren på dina/era frågeställningar och kontrollerar och reflekterar över om
   rapporten uppfyller syftet. Stämde dina/era antaganden? Löstes problemet? Förklara om det
   blev som du/ni tänkt er, beskriv vad du lärt dig och vad du/ni kunnat göra annorlunda för att
   få ett bättre resultat. Koppla tillbaka till de beslut som har fattats under resans gång och
   konsekvenserna av dem. Om något blev fel, så är det helt okej att berätta det här och beskriv
   vad du lärt dig av det och kanske hur det påverkat utfallet/resultatet.
   5
   Du kan även diskutera noggrannheten/tillförlitligheten i arbetet och beskriva om det skiljer sig
   från liknande arbeten. Om du/ni har kommit fram till något annat resultat än andra som gjort
   liknande arbeten, beskriv varför du tror att det är så.
   Tänk på att inte låta den här texten bli full av undanflykter och ursäkter, utan snarare en saklig
   reflektion.
5. Slutsatser
   Utifrån den analys du/ni gjort i avsnittet ovan kan du dra slutsatser utifrån syfte och
   frågeställningarna. Ett visst mått av subjektivitet är tillåtet men det måste vara motiverat av
   det som framkommit i uppsatsens analys.
   Ibland går det dock inte att dra några säkra slutsatser, det ligger i forskningens natur, vilket
   också är ett resultat. Man förklarar då varför det inte gick att dra säkra slutsatser.
   5.1 Rekommendationer
   Baserat på vad du/ni kommit fram till samt på undersökningens syfte, avger du här din
   yrkesmässiga/professionella rekommendation till dem som kan dra nytta av
   undersökningens resultat. Här kan ni tänka fritt och diskutera ämnet ur ett mer subjektivt
   perspektiv.
   6
6. Referenslista
   De källor du använt ska redovisas i en referenslista. Den ska vara på ett eget blad och sist i
   arbetet.
   I källförteckningen anger ni den litteratur ni har hänvisat till i texten. Referenslistan
   presenteras alltid i alfabetisk ordning. Han ni väldigt många källor kan ni även dela upp dessa
   i litteratur, internet, artiklar och muntliga källor. Glöm inte ange datum för internet och
   muntliga källor.
   Nedan finns exempel på de olika systemen.
   Litteraturförteckning
   Exempel APA
   Bok - 1 författare
   Ejlertsson, G. (2019). Statistik för hälsovetenskaperna (3 uppl.) Studentlitteratur.
   Bok – 2 författare
   Aldskogius, H., & Rydqvist, B. (2018). Den friska människan: anatomi och fysiologi. Liber
   Internet
   Folkhälsomyndigheten. (8 oktober 2019). Sjukdomsinformation om influensa.
   https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-
   sjukdomar/influensa-/
   Exempel Harvard
   Bok – 1 författare
   Eklund, K. (2017). Vår ekonomi: en introduktion till samhällsekonomin. 14 uppl., Lund:
   Studentlitteratur
   Bryman, A. & Bell, E, Företagsekonomiska forskningsmetoder, 2. uppl., Stockholm: Liber
   AB, 2014. ISBN: 978-91-47-09822-4
   Internet
   Rhodin, M. (2018). Projekt Islandshäst. Rörelseforskning på häst och ryttare – en
   forskarblogg från SLU. [Blogg]. 17 maj.
   http://blogg.slu.se/rorelseforskning/2018/05/17/projekt-islandshast/ [2020-02-06]
   7
   Bilagor
   I bilagor samlas allt som inte är nödvändigt för att följa och förstå framställningen i
   huvuddelen, t.ex. intervjufrågor, materialdata, omfattande beräkningar och programkoder eller
   detaljerade metodbeskrivningar. Här kan man också placera figurer som är för stora för att
   infoga i den löpande texten. Bilagorna skall utformas så att de kan fungera som självständiga
   dokument, dvs man skall inte behöva läsa i huvuddelen för att kunna förstå innehållet i
