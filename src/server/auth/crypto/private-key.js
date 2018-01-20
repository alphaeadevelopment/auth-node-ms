import { keyFromFile } from '@alphaeadev/crypto';
import privateKeyFile from './private-key-file';

export default keyFromFile(privateKeyFile, 'pkcs1-private-pem');

