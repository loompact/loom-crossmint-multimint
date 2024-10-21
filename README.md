# Dynamic quantity (multi-mint) Crossmint button implementation (e.g. for Solana CMv3 drops)

This code implements a "iframe-able" page to be integrated anywhere in your site for operating a Solana/CandyMachine-based NFT drop. It also can be used for other Crossmint-supported ontract types like 'erc-721', 'erc-1155', 'thirdweb-drop' or 'thirdweb-edition-drop' but I haven't tested that yet...

### Preview

![Screenshot of the implemented multi-mint button](https://bafkreido5poqjy6nmbwioieroo5tip3thr5aycbinv3q2ysdzrixo6s2wu.ipfs.nftstorage.link)

### Prerequisites

- a properly set up NFT Collection contract on a Crossmint-supported chain *(I've used a Solana-based Candy Machine V3 standard NFT & pNFT -TokenStandard V1 oder V2- on Solana for my projects)*
- a JS/REACT dev environment including the "typical" tools (npm etc.)

### Installation & start

- Run an 'npm install' in your root of the cloned repository. It'll fetch all necessary libraries. 
- An 'npm run start' will start the application
- An 'npm run build' will compile an optimized build
- This repository can be easily cloned to Vercel - that's the easiest way to deploy it.

### URL & embedding parameters

In this updated version, there is no need for an .env file anymore. All you need to do is to hand over the required Crossmint payment button parameters in an URL format:

```
https://<your_button_url>/?projectId=<your_crossmint_project_id>&collectionId=<your_crossmint_collection_id>&cmNet=<staging OR production>
```

If you want to embed the button into an iframe transparently (so properly integrating it into the website's background color), here's the code sniplet:

```
<iframe allowtransparency="true" width="100%" height="150px" src="https://<your_button_url>/?projectId=<your_crossmint_project_id>&collectionId=<your_crossmint_collection_id>&cmNet=<staging OR production>"></iframe>
```

### Quick customization

The index.css contains all major settings for the appearance of your button area. The background of your page can be set in the 'root' definition. The settings for the button itself, so it's text content, color, font etc., can be found in the several 'button.xmint-btn' sections.

Furthermore in the App.js file (which is the main program code) are several settings that might be relevant:

- the sizes of the button paddings & alignments can be found in the upper 'const' definitions parts
- the variable 'mintMaximum' defines the maximum amount of NFTs that can be selected within one transaction *(at the moment it is set to 5 as Crossmint has a maximum of 5 NFTs per sale as a standard upper limit)*
- in the Crossmint button definition there is the settings for the locale, currency and also the blockchain contract type *(it is set to 'candy-machine' for my use case but by changing that you are also able to use this one for other contract types like 'erc-721', 'erc-1155', 'thirdweb-drop' or 'thirdweb-edition-drop')*

## Collaborating
Want to collaborate and make the repo better? Feel free to submit a pull request to the main branch.

## Feedback/Support
If you have any feedback or need support, please submit an issue through [Github Issues](https://github.com/loompact/loom-crossmint-multimint/issues).
