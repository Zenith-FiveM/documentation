---
sidebar_position: 1
title: Introduction
description: Zenith is a modern, lightweight, modular roleplay framework for FiveM, built on the ox ecosystem.
keywords: [zenith, fivem, roleplay, framework, ox, qbcore, esx]
---

# Welcome to Zenith

**Zenith is a modern roleplay framework for FiveM.** Lightweight. Modular. Built on ox.

It gives you everything a server actually needs — characters, an economy, jobs, metadata and
permissions — in one clean, predictable core, without the bloat of an all-in-one framework or the
grind of wiring everything together yourself.

:::info[Pre-release]
Zenith is in active development and has not been publicly released yet. These docs are going live
early so the community can follow along — expect them to grow quickly as features land. Nothing here
is final, and the API is still settling.
:::

## Why Zenith exists

Most frameworks make you choose between two extremes:

- **Do-everything frameworks** ship hundreds of features you'll never use, tangle your server in deep
  dependency chains, and make even small changes risky.
- **Bare-bones frameworks** hand you a blank slate and leave you to rebuild the basics — characters,
  money, jobs — before you can write a single line of actual gameplay.

Zenith sits deliberately in the middle. The core is small and complete: it covers the fundamentals
every serious server relies on, and then gets out of your way. Everything beyond that is a module you
opt into — never a tax you pay by default.

## What's in the core

The Zenith core focuses on the systems every roleplay server depends on:

- **Characters** — creation, selection, and lifecycle management.
- **Economy** — cash, bank, and account balances with a consistent model.
- **Jobs** — assignable roles with grades and permissions.
- **Metadata** — flexible per-character data for anything your systems need to track.
- **Permissions** — a clear, centralized model for who can do what.

Each of these is exposed through a single, documented, predictable API — so you spend your time
building features, not reverse-engineering the framework.

## Built on the ox ecosystem

Zenith is designed from the ground up to work with the tools the modern FiveM community already
trusts. Instead of reinventing inventories, targeting, or database access, it integrates natively
with:

- **ox_lib** — shared utilities, UI, and helpers.
- **oxmysql** — fast, reliable database access.
- **ox_inventory** — a full-featured inventory system.
- **ox_target** — modern interaction and targeting.

Because Zenith speaks these tools' language out of the box, there's no glue code to write and no
compatibility layer to babysit.

## Modular by design

Every system outside the core is a self-contained module. You enable only what your server uses, and
you can extend, replace, or disable any module without the core noticing. That keeps your server
lean, your updates painless, and your codebase easy to reason about as it grows.

## Coming from QBCore or ESX

Migrating a live server is hard, so Zenith doesn't ask you to do it all at once. A compatibility
bridge lets many of your existing QBCore and ESX resources keep running while you move to Zenith at
your own pace — adopting it gradually instead of rebuilding everything overnight.

## Who Zenith is for

- **Server owners** who want a solid, maintained foundation without the weight of a monolith.
- **Developers** who value a clean API, clear documentation, and predictable behavior.
- **Communities** who care that their framework is open-source and here to stay.

Zenith is released under the **GPL-3.0** license — free and open-source, with no paywalls and no
escrow. Read it, fork it, and ship it.

## What's next

As the framework approaches release, this documentation will expand to cover installation,
configuration, the full core API, module development, and migration guides. For now, this page is
your starting point.

:::tip[Stay in the loop]
Follow development and get release announcements on the
[Zenith Discord](https://discord.zenithfivem.dev) and
[GitHub](https://github.com/Zenith-FiveM).
:::
