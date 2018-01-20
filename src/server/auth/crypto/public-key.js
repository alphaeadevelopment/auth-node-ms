import { keyFromFile } from '@alphaeadev/crypto';
import publicKeyFile from './public-key-file';

export default keyFromFile(publicKeyFile, 'pkcs1-public-pem');
