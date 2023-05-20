import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection("https://api.metaplex.solana.com/");
const metaplex = new Metaplex(connection);

export default metaplex;
