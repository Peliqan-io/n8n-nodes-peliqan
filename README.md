# n8n-nodes-peliqan

This is an **n8n community node** that lets you use [Peliqan](https://peliqan.io) in your [n8n](https://n8n.io) workflows.  

Peliqan.io is an all-in-one data platform with **ELT**, a **built-in data warehouse**, **data transformations**, and a **data cockpit**.  

## Table of contents

- [Installation](#installation)  
- [Operations](#operations)  
- [Credentials](#credentials)  
- [Usage](#usage)  
- [Resources](#resources)  
- [Version history](#version-history)  


## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n documentation.  


## Operations

The node currently supports:

- **List tables** – Retrieve available tables  
- **Get data from table** – Query records from a Peliqan table  
- **Run pipeline** – Trigger an existing pipeline  
- **Execute endpoint** – Call an API endpoint defined in Peliqan  
- **Create SQL query** – Create a new SQL query in Peliqan  
- **Execute SQL query** – Run a query against Peliqan’s data warehouse  
- **Run script** – Execute a script stored in Peliqan  
- **Get script logs** – Retrieve execution logs of a script  

## Credentials

1. Log in to [Peliqan.io](https://peliqan.io).  
2. Go to **Settings → API Token**.  
3. Copy your API Token.  
4. In n8n, go to **Credentials → New → Peliqan API** and paste your Token.  

🔑 More details here: [Configure credentials in n8n](https://help.peliqan.io/build-ai-agents-with-n8n-and-peliqan#2401aa9b38798047ad22e353042f5d74).  


## Usage

- Visit the [Peliqan Documentation](https://help.peliqan.io) for guides and tutorials:
    - To set up **AI Agents in n8n** with RAG and SQL: [step-by-step guide](https://help.peliqan.io/build-ai-agents-with-n8n-and-peliqan).  

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)  
- [Peliqan.io](https://peliqan.io)  
- [Peliqan Documentation](https://help.peliqan.io)  


## Version history

- **May 2025** – `v0.0.1` initial implementation  
- **June 2025** – `v0.0.3` add table list operation  
- **June 2025** – `v0.0.4` enable tool usage of node  
- **September 2025** – `v0.0.5` UX fixes and code overhaul
- **October 2025** – `v0.0.6` replace deprecated functions
- **October 2026** – `v0.0.7` fix Endpoint Execute using the app URL instead of the API URL
