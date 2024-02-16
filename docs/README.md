<div align="center">
    <a href="https://www.youtube.com/@iogacademy"><img src="./img/logos.png" alt="IOG Academy on YouTube" width="400"></a>
  <h1>Welcome to the Cardano Developer Course</h1>
</div>

- **Instructor:**
  - [Lars Brünjes](email:lars.bruenjes@iohk.io)
- **TAs**
  - [Robertino Martinez](email:robertino.martinez@iohk.io)
  - [Karina Lopez](email:karina.lopez@iohk.io)
  - [Antonio Ibarra](email:antonio.ibarra@iohk.io)

## Course Description

This is a full-time course that will take you from zero to a productive Haskell and Smart Contract developer. In this course, we'll learn Haskell (an advanced, purely functional programming language), Marlowe (an ecosystem of tools and languages to enable the development of financial and transactional smart contracts), and Plutus (the smart contract platform of the Cardano blockchain).

Here's a high-level overview of each week's contents:

**⚠️ IMPORTANT!: The schedule and outline might be heavily modified according to student's interests and performance**

- **Week 1 (Haskell):** Introduction to Haskell's syntax, core principles, and IO.
- **Week 2 (Haskell):** Testing, common abstractions, tools, and testing.
- **Catchup week:**     Rest, catch up and consolidate the fundamental knowledge.
- **Week 3 (Haskell):** More abstractions, writing non-trivial programs, and data structures.
- **Week 4 (Haskell):** Combining effects, concurrency and parallelism, and Networking.
- **Week 5 (Marlowe):** Write smart contracts with Marlowe.
- **Week 6 (Plutus):** Cardano Blockchain, EUTxO, Plutus tooling and simple Plutus contracts.
- **Week 7 (Plutus):** Non-trivial Plutus smart contracts and complete Dapps.
- **Week 8 (Plutus):** Final project (chosen by the students) or More Dapps.

## Getting the Software

To go through this course, you will need:

### Haskell:
- `ghc` (the Haskell compiler) version `9.6.3`.
- `cabal-install` and Cabal library (a build tool for Haskell) version `3.10.2.0`.
- Haskell's Language Server
- A suitable text editor or IDE (e.g., VSCode, (Neo)Vim, Emacs) with proper configuration.

**If you want to start working on your own code**, we recommend using [this template](https://github.com/iog-edu-kenya-2024/haskell-template) which comes with a development environment ready to go.

**If you want to run the examples in this repo, choose the one you prefer:**
- Remote development environment: [Install the GitPod extension](https://www.gitpod.io/docs/configure/user-settings/browser-extension), and click the new "Gitpod" button at the top of the repo.
- Local development environment inside Docker: Make sure you have the latest version of [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [VSCode](https://code.visualstudio.com/). Open the `examples-haskell` folder in VSCode (not the root of the repo). You'll get a notification about a Dev Container config file. Click on "Reopen in Container".
- Local development environment directly on your computer using GHCup: Follow [these instructions](https://www.youtube.com/watch?v=hSN5mxITv0A&list=PLNEK_Ejlx3x1D9Vq5kqeC3ZDEP7in4dqb&index=13) (all platforms).

### Marlowe
A local Docker instance or online environment provided by the instructors.

### Plutus
A local Docker instance or online environment provided by the instructors.

## How to get help

- [Haskell tag stackoverflow](https://stackoverflow.com/questions/tagged/haskell)
- [IOG Technical Community](https://discord.com/invite/inputoutput)

## Lectures 

|      ID     | Lecture and slides                                       | Assignments                                            | Projects                                            |
|-------------|----------------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------|
| **Week 01** |                                                          |                                                        |                                                     |
| Lecture 000 | Welcome                                                  |                                                        |                                                     |
| Lecture 010 | Introduction to Cryptocurrencies                         |                                                        |                                                     |
| Lecture 020 | An Overview of Haskell                                   |     [A1](https://classroom.github.com/a/-1HBIQg-)      |                                                     |
| Lecture 030 | Datatypes & Functions                                    |     [A2](https://classroom.github.com/a/I3gkUEN1)      |                                                     |
| Lecture 040 | Polymorphism & Type Classes                              |                                                        |                                                     |
| Lecture 050 | Higher-Order Functions                                   |                                                        |                                                     |
|             | Packaging & Tools                                        |                                                        |                                                     |
| Lecture 060 | IO                                                       |                                                        |                                                     |
| **Week 02** |  **TO BE RELEASED**                                      |                                                        |                                                     |


### Assignments

Daily assignments are due the next day.

Weekly homework is due Mondays before the lecture, one week after they have been handed out.

All submissions are via GitHub Classroom.

### Defects

If you find a defect in one of the sample programs or slides (typos included), please, open an issue on this GitHub repository.

### Bibliography

#### Haskell

0. IOG Academy. [Haskell Course](https://github.com/input-output-hk/haskell-course). YouTube.

> Beginner-friendly Haskell course.

We have read most of these books and they provide good information for beginners.

1. Lipovača M. [Learn You A Haskell For Great Good!](http://learnyouahaskell.com/). San Francisco: No Starch Press; 2012.

> Beginner-friendly book with lots of examples.

2. O'Sullivan B, Stewart D, Goerzen J. [Real World Haskell](http://book.realworldhaskell.org/). Farnham: O'Reilly; 2009.

>A lot of real-world techniques, just a little bit outdated at this point.

3. Bird R. [Algorithm Design With Haskell](https://www.amazon.com/Algorithm-Design-Haskell-Richard-Bird-ebook/dp/B08BKXJ1N3/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1597814133&sr=8-1). Cambridge University Press; 2020.

>Learn how far you can get with immutable data, to implement almost all standard algorithms.

4. Thibaut C. [Texas Hold'em: The Little Haskeller](https://leanpub.com/texasholdem-tlh).leanpub.com; 2019.

>A long article, written in the Question and Answer format. Like the Little Schemer.

5. Penner C. [Optics By Example: Functional Lenses In Haskell](https://leanpub.com/optics-by-example). leanpub.com; 2020.

>The only book on optics.

6. Haskell Org. More resources at [Hakell's official website](https://www.haskell.org/documentation/).

> It contains dozens of resources from various sources.

#### Marlowe

7. IOG. [Marlowe official documentation](https://docs.marlowe.iohk.io/docs/introduction).

#### Plutus

8. IOG. PlutusTx [official documentation](https://plutus.readthedocs.io/en/latest/).

9. IOG. Plutus Core [repository](https://github.com/input-output-hk/plutus).
