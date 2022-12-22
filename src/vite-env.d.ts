/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_NETWORK: string;
	VITE_CHAIN_ID: string;
	VITE_PROTOCOL_ADDRESS: string;
	VITE_SBT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}