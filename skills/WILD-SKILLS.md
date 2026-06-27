# Top Real-World Skills & Agent-Tool Collections (verified, mid-2026)

Reference list the program's skills cite under **"Related skills in the wild."** All URLs verified to resolve
(June 2026). **[O]** = official/vendor · **[C]** = community.

## 1. Anthropic official (Agent Skills + Claude)
- **[O]** [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills repo: the SKILL.md spec, a template, `document-skills` (docx/pdf/pptx/xlsx), `example-skills` (skill-creator, mcp-builder, webapp-testing…). Format authority.
- **[O]** [Agent Skills spec](https://github.com/anthropics/skills/blob/main/spec/agent-skills-spec.md) — the YAML-frontmatter SKILL.md spec.
- **[O]** [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes: agents, tool_use, `/evaluation`, `/finetuning`, observability, multimodal, RAG, `/skills`.
- **[O]** [anthropics/claude-code](https://github.com/anthropics/claude-code) — the agentic CLI (skills, hooks, slash-commands, plugins).
- **[O]** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) — vetted Claude Code plugins (many bundle skills).
- **[O]** Docs: [code.claude.com/docs](https://code.claude.com/docs), docs.claude.com; open standard portal agentskills.io.

## 2. Community "awesome" skill collections
- **[C]** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — ~1,500 hand-picked skills (Anthropic, Google Labs, Vercel, Stripe, Cloudflare, HuggingFace, Figma + community); cross-tool.
- **[C]** [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — canonical curated Claude Code list (skills, hooks, slash-commands, orchestrators).
- **[C]** [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — curated production Claude Skills & plugins.
- **[C]** [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — 50+ verified skills (TDD, debugging, git, doc processing).

## 3. "Superpowers" / skill frameworks
- **[C]** [obra/superpowers](https://github.com/obra/superpowers) — flagship agentic-skills framework + methodology (brainstorming → writing-plans → subagent-driven-development → TDD → systematic-debugging).
- **[C]** [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) — installable Claude Code plugin marketplace.
- **[C]** [obra/superpowers-skills](https://github.com/obra/superpowers-skills) · [obra/superpowers-lab](https://github.com/obra/superpowers-lab) — community + experimental skills.

## 4. Agent tool / skill hubs
- **[O]** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP reference servers (Fetch, Filesystem, Git). Canonical "tools as MCP."
- **[O]** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) — official MCP server registry (registry.modelcontextprotocol.io).
- **[C]** [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) — largest curated MCP-server list.
- **[O]** [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library; tool-design reference (MCP/LangChain/Hub interop).
- **[O]** [ComposioHQ/composio](https://github.com/ComposioHQ/composio) — managed authenticated tool layer for agents.
- **[O]** [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework + tools.
- **[O]** [run-llama/llama_index](https://github.com/run-llama/llama_index) — data loaders / agent tools / llama-packs (llamahub.ai).

## 5. Runnable app/template collections
- **[C]** [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 100+ runnable Agent & RAG apps; covers Agent Skills, MCP agents, multi-agent, fine-tuning.
- **[C]** [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated autonomous agents.

## 6. Domain: safety / evals / MLOps / RL
- **[O]** [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI LLM-eval framework (datasets/agents/tools/scorers). Reference for agent-eval & safety-eval skills.
- **[O]** [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals (coding, agentic, reasoning, red-team/safety).
- **[O]** [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — RLHF/GRPO post-training (for RL/reasoning skills).

## Anchors for these skills
`anthropics/skills` (format authority) · `anthropics/claude-cookbooks` (recipes) · `obra/superpowers` (methodology) ·
`VoltAgent/awesome-agent-skills` + `hesreallyhim/awesome-claude-code` (breadth) · `UKGovernmentBEIS/inspect_ai` (evals/safety) ·
`modelcontextprotocol/servers` (tools/MCP) · `Shubhamsaboo/awesome-llm-apps` (RAG/agents).
