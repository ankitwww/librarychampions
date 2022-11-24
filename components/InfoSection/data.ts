import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaExpandAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'
import { MdLibraryBooks } from 'react-icons/md'
import { HiUserGroup, HiOutlinePrinter } from 'react-icons/hi'

export const features = [
  {
    name: 'Digital Services',
    description: 'Find and access ebooks, e-audiobooks, magazines, newspapers, resource guides and lots more',
    icon: BsStars,
  },
  {
    name: 'Get job ready',
    description:
      'LinkedIn Learning, O&apos;Reilly Books, Skilled Immgirant InfoCenter and many more resources.',
    icon: IoRocketSharp,
  },
  {
    name: 'IELTS & English',
    description: 'Books, videos, and online tools to help immigrants learn and improve their English. ESL and ELL book.',
    icon: MdLibraryBooks,
  },
  {
    name: 'Kids and Seniors',
    description:
      "In person activities including story time, coding, crafts, Kanopy kids etc. ",
    icon: HiUserGroup,
  },
  {
    name: 'Working Resources',
    description: 'Borrow devices, print and copy, recording studio and many more',
    icon: HiOutlinePrinter,
  },
  {
    name: 'Activities and events',
    description:
      "Multiple community based events including Open gaming, device clinics, book clubs, Tech Connect",
    icon: FaRegCalendarAlt,
  },
]