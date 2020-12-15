export type Maybe<T> = T | null;
import { WalletBase } from 'web3-core';

export type TypeEncryptedSeed = {
	__typename?: 'TypeEncryptedSeed';
	ciphertext?: string;
	iv?: string;
	salt?: string;
};

export type Type2FARequired = {
	__typename?: 'Type2FARequired';
	email: boolean;
	authenticator: boolean;
};

export type TypeSeedFoundData = {
	__typename?: 'TypeSeedFoundData';
	email: string;
	encryptedSeed: TypeEncryptedSeed;
	hashedPassword: string;
};

export type TypeSeedCreatedData = {
	__typename?: 'TypeSeedCreatedData';
	email: string;
	encryptedSeed: TypeEncryptedSeed;
	hashedPassword: string;
};

export type TypeFetchUser = {
	__typename?: 'TypeFetchUser';
	email: string;
	password: string;
};

export type TypeUnlock2fa = {
	__typename?: 'TypeUnlock2fa';
	email2FA: string;
	authenticator2FA: string;
};

export type TypeState = {
	__typename?: 'TypeState';
	loading: boolean;
	status: string;
	message: string;
	email: string;
	hashedPassword: string;
	encryptedSeed: string;
	encryptedWallet: string;
	keystore: WalletBase;
	token: string;
	twoFaRequired: Type2FARequired;
};

export type TypeUnlockWithPassword = {
	__typename?: 'TypeUnlockWithPassword';
	password: string;
};

export type TypeChangePassword = {
	__typename?: 'TypeChangePassword';
	oldPassword: string;
	newPassword: string;
};

export type TypeUserFoundData = {
	__typename?: 'TypeUserFoundData';
	email: string;
	hashedPassword: string;
};

export type TypePayloadData = {
	__typename?: 'TypePayloadData';
	email: boolean;
	authenticator: boolean;
};

export type TypeCreatedKeystore = {
	__typename?: 'TypeCreatedKeystore';
	encryptedSeed: TypeEncryptedSeed;
	keystore: WalletBase;
};

export type WalletSign = {
	__typename?: 'WalletSign';
	sign: any;
};

export type ZeroWalletConfig = {
	__typename?: 'Type2FARequired';
	show_transaction: boolean;
	confirm_transaction: boolean;
	show_message: boolean;
	confirm_message: boolean;
} | null;

export type TypeKeystoreUnlocked = {
	__typename?: 'TypeKeystoreUnlocked';
	accounts: [string];
	keystore: WalletBase;
};

export type TypeRequestParams = {
	__typename?: 'TypeRequestParams';
	body: any;
	url: string;
	method: string;

};