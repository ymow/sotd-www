export const state = () => {
  return {
    about: {
      body: ''
    },
    confirmation: {
      body: ''
    },
    footer: {
      disclaimer: ''
    },
    submit: {
      message: ''
    },
    what: {
      body: `
        <p class="paragraph -intro">Bitcoin laid the first stone with its cryptographically stored ledger, scarce-asset model, and peer-to-peer technology. Which led to a new model to help building massively scalable and profitable applications. A new type of software called decentralized applications, or ÐApps, require these important features to be built. The term application is which is commonly use to relate to a software, it defines a specific goal. Most of the applications that we use follow a centralized server-client model, a few are distributed and now more and more are becoming decentralized. Here bellow is a visual explaining the differences between the three types of software.</p>

        <img src="/images/distributed.png" width="550">

        <p class="paragraph">Centralized software or system are the most widespread. It is where decisions for the system goal are made in a central mechanism and then transmitted to executive components or people. All executives are dependent on the central mechanism to take actions. Most of the services found on the internet use this system. The difference between decentralized and distributed is that a distributed system is a network consisting of autonomous computers that are connected using a distribution middleware. The components interact with each other in order to achieve a common goal. Decentralized computing is the allocation of resources to each individual workstation, on hardware and software. It means no node is informing any other node as what to do.</p>

        <p class="paragraph">Therefore, decentralized applications are applications which run on a P2P network of computers, instead of a one computer. They are considered to be a form of software program designed to function on the internet without being controlled by a single entity. ÐApps can have front-end code and user interfaces written in any language, just like a traditional application, which can make calls to its backend.</p>

        <h2 class="sub-heading">ÐApps on the Blockchain</h2>

        <p class="paragraph">For decentralized applications to be considered on the blockchain, they often must meet the following criteria:</p>

        <ul class="text-list">
          <li>Be completely open-source</li>
          <li>Data and records of operation of application to be cryptographically stored</li>
          <li>Use a cryptographic token</li>
          <li>Generate tokens</li>
        </ul>

        <img src="/images/dapp-diagram.png" width="550">

        <p class="paragraph">The development process of a ÐApp often entails a Whitepaper and a working prototype, a token sale, an initial coin offering (ICO), its implementation and launch.</p>

        <h2 class="sub-heading">ÐApps on the Ethereum Platform</h2>

        <p class="paragraph">The Ethereum Platform created a protocol for building decentralized applications. It is an open-source public, blockchain-based distributed computing platform which features smart contracts functionality, also called scripting. It provides a decentralized Turing-complete virtual machine, the Ethereum Virtual Machine (EVM), which execute scripts using an international network of public nodes. ÐApps are more flexible, transparent, distributed, and resilient and have a better incentivized structure software model.</p>

        <p class="paragraph">Developers are sharing different opinions as what defines precisely ÐApp. Certain say that having no central point of failure is the most important attribute and others say they are more requirements to it.</p>

        <p class="paragraph">The Ethereum Platform can allow anyone to write smart contracts and decentralized applications where you can choose your own ‘rules’ for ownership, transactions formats and transitions functions. Multiple kinds of types are being created, such as financial, governance, community, legal, health, education. They permit a more direct interaction between two parties.</p>

        <h2 class="sub-heading">Further Reading</h2>

        <ul class="text-list">
          <li><a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank">Ethereum Whitepaper</a></li>
          <li><a href="http://gavwood.com/Paper.pdf" target="_blank">Ethereum Yellow paper for technical specifications</a></li>
          <li><a href="https://medium.com/technologymadeeasy/develop-dapps-on-ethereum-tutorial-series-for-beginners-part-1-basic-terminology-866d2ce4cf34" target="_blank">ÐApp terminology</a></li>
          <li><a href="https://dappdaily.com/ethereum-reading-list-for-prospective-dapp-developers-15d515383b23" target="_blank">Ethereum reading list for prospective ÐApp developers</a></li>
        </ul>
      `
    }
  }
}

export const getters = {
  about: state => {
    return state.about
  },
  confirmation: state => {
    return state.confirmation
  },
  footer: state => {
    return state.footer
  },
  submit: state => {
    return state.submit
  },
  what: state => {
    return state.what
  }
}
