---
name: fix-issue-gh
description: "Pega uma issue do GitHub via gh CLI, analisa o problema, planeja e implementa a correção com verificação de testes. Use quando receber um número ou URL de issue do GitHub para corrigir."
compatibility: opencode
metadata:
  workflow: github
---

## What I do

1. **Fetch issue** via `gh issue view <number>` — título, descrição, labels, comentários
2. **Analyze** — entendo o problema, os arquivos afetados e o comportamento esperado
3. **Explore** — uso `gh` para listar arquivos do repositório, procuro por código relevante
4. **Plan** — defino os arquivos a modificar e a abordagem
5. **Implement** — faço as alterações necessárias
6. **Verify** — executo `npm run test` (e `npm run lint`, `npm run typecheck` se aplicável)
7. **Auto-review** — delego revisão ao subagent `code-reviewer` via `task`
8. **Report** — mostro um resumo do que foi feito, arquivos alterados e status dos testes

## Workflow

### 1. Parse input

Aceito número da issue, URL completa, ou `owner/repo#123`:

| Input | Comando |
|---|---|
| `#42` | `gh issue view 42` |
| `https://github.com/owner/repo/issues/42` | `gh issue view 42 -R owner/repo` |
| `owner/repo#42` | `gh issue view 42 -R owner/repo` |
| `42` | `gh issue view 42` |

### 2. Fetch issue details

```
gh issue view <number> --json title,body,labels,comments,author,state,url
```

Também busco comments completos se necessário:
```
gh issue view <number> --comments
```

E verifico o estado atual:
```
gh issue view <number> --json state,assignees
```

### 3. Analyze the problem

- Leio o título e descrição para entender **o que** está quebrado
- Leio comments para contexto adicional (screenshots, stack traces, discussão)
- Verifico labels (bug, enhancement, etc.) para entender o tipo de mudança
- Procuro no código por arquivos relacionados ao problema descrito

### 4. Plan the fix

Antes de implementar, apresento o plano:
```
Plano para fix da issue #<N>:
- Problema: <descrição concisa>
- Arquivos afetados: <paths>
- Abordagem: <estratégia>
- Testes: <como verificar>
```

### 5. Implement

- Sigo as convenções do projeto (AGENTS.md, estilo de código)
- Faço alterações cirúrgicas — apenas o necessário para resolver a issue
- Adiciono/atualizo testes se aplicável

### 6. Verify

Sempre executo ao final:
```
npm run test
npm run lint
```

Se houver testes específicos para a área afetada, executo também.

### 7. Auto-review (delegado ao code-reviewer)

Antes de reportar, delego a revisão ao subagent `code-reviewer` via `task`:

```
task("Review the implementation diff for issue #<N>", { agent: "code-reviewer" })
```

Forneço ao subagent:
- O diff completo dos arquivos alterados (`git diff`)
- O número e título da issue original
- Contexto mínimo: quais arquivos foram tocados e por quê

O `code-reviewer` retorna `approved` ou `changes-requested`.

- **`approved`** → sigo para o Report.
- **`changes-requested`** → corrijo os apontamentos e volto ao passo **Verify** (ciclo: implement → verify → review → implement...).

### 8. Report

```
Issue #<N> — <título>
Estado: ✅ Resolvida (ou ⚠️ Parcial)
Arquivos alterados:
  - src/foo.ts — <o que mudou>
  - src/bar.test.ts — <teste adicionado>
Testes: <X passed, Y failed>
Lint: ✅
```

## Dicas

- Se a issue não tiver descrição clara, use os comments e labels para inferir o problema
- Se for um `enhancement`, trate como feature — implemente a funcionalidade descrita
- Se for um `bug`, primeiro tente reproduzir o bug (com testes ou manualmente)
- Issues com `good first issue` ou `help wanted` tendem a ser mais isoladas
- Se encontrar dependências não óbvias, mencione no plano antes de implementar
- Issues fechadas já resolvidas — avise e não implemente
- Issues sem informação suficiente — peça esclarecimentos

## Exemplo de uso

Input: `#42`

```
gh issue view 42 --json title,body,labels
```
