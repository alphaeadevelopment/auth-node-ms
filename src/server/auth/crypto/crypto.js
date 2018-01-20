
import { decryptUsingKey } from '@alphaeadev/crypto';
import privateKey from './private-key';

export const decrypt = decryptUsingKey(privateKey);
