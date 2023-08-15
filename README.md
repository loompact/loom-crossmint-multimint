# Dynamic quantity (multi-mint) Crossmint button implementation (e.g. for Solana CMv3 drops)

This code implements a "iframe-able" page to be integrated anywhere in your site for operating a Solana/CandyMachine-based NFT drop. It also can be used for other Crossmint-supported ontract types like 'erc-721', 'erc-1155', 'thirdweb-drop' or 'thirdweb-edition-drop' but I haven't tested that yet...

### Preview

![Screenshot of the implementet multi-mint button](https://bafkreido5poqjy6nmbwioieroo5tip3thr5aycbinv3q2ysdzrixo6s2wu.ipfs.nftstorage.link)

### Prerequisites

- a properly set up Candy Machine on Solana *(I've used a CM v3 "v1"-type for my tests)*
- a JS/REACT dev environment including the "typical" tools (npm etc.)

### Installation & start

- Run an 'npm install' in your root of the cloned repository. It'll fetch all necessary libraries. 
- An 'npm run start' will start the application
- An 'npm run build' will compile an optimized build
- This repository can be easily cloned to Vercel - that's the easiest way to deploy it. You just need to set the correct parameters to your Crossmint contract (see .env parameters below).

### Env Variables

An template for the necessary .env file can be found in "env.template".

```
REACT_APP_CROSSMINT_PROJECT_ID=<your_crossmint_project_id>
```
```
REACT_APP_CROSSMINT_COLLECTION_ID=<your_crossmint_collection_id>
```
```
REACT_APP_CROSSMINT_NET=<"staging" or "production">
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
