import connectDB from '@/lib/connectDB'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    connectDB()

    return <div>page</div>
}

export default page