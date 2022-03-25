/* 
KENAPA PERLU file index?

ini bertujuan untuk langsung pake foldernya dari pada ambil dari sumber file componentnya (tree shaking)

dari yang awalnya ini :
import Navbar from './Navbar/Navbar';


menjadi :
import Navbar from './Navbar';

*/

// di ambil dulu komponentsnya
import Navbar from './Navbar'

export default Navbar

/* 
atau bisa pake ini

export {default as default} from './Navbar'

langsung import dan export bersamaan
*/

/* 
indexing bisa mempermudah pemanggilan di javascript yang complex

contoh folder
.
├── 🗁 components
│   ├── 🗁 atoms
│   │   ├── 🗀 Button
│   │   ├── 🗀 Input
│   │   ├── 🗀 Link
│   │   ├── 🗀 Image
│   │   └── index.jsx*
│   ├── 🗀 molecules
│   ├── 🗀 organisms
│   └── 🗀 molecules
.

di dalam file index.jsx di folder atoms, kita bisa mengimport semuanya 

? ====== file index.jsx ======
import Button from './Button'
import Input from './Input'
import Link from './Link'
import Image from './Image'

export {
  Button,
  Input,
  Link,
  Image
}
? ====== file index.jsx ======

? ====== file yang manggil dari folder atoms ======
import {Button, Input, Link, Image} from './components/atoms'

? ====== file yang manggil dari folder atoms ======


NOTE : structure folder di atas adalah salah satu dari "architecture" dalam pembuatan software
- clean architecture : https://github.com/eduardomoroni/react-clean-architecture
- atomic design pattern : https://github.com/danilowoz/react-atomic-design
- etc
*/
