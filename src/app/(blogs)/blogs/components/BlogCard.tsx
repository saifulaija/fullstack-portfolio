// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
// import { MyAvatar } from '@/components/shadcn/MyAvatar'
// import { formateDate } from '@/utils/common'
// import { truncateTitle } from '@/utils/truncateTitle'
// import { Button } from '@/components/ui/button'
// import { ChevronRight, Bookmark, BookmarkCheck, Copy, ThumbsUp, ArrowBigUp } from 'lucide-react'
// import { IBlog } from '@/types/blog.type'
// import { useState, useEffect } from 'react'
// import { useToast } from '@/components/ui/use-toast'
// import { ToastAction } from '@/components/ui/toast'
// import Link from 'next/link'


// const BlogCard = ({ blog }: { blog: IBlog }) => {
//     const { toast } = useToast()
//     const router = useRouter()
//     const truncatedTitle = truncateTitle(blog?.title, 30)
//     const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/details/${blog?._id}`
//     const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${blog?.title} - ${currentUrl}`)}`
//     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?display=page&u=${encodeURIComponent(currentUrl)}`
//     const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

//     const [isBookmarked, setIsBookmarked] = useState(false)
//     const [isUpvoted, setIsUpvoted] = useState(false)
//     const [voteCount, setVoteCount] = useState(0)

//     useEffect(() => {
//         setIsBookmarked(localStorage.getItem(`bookmark-${blog?._id}`) === 'true')
//         const storedVote = localStorage.getItem(`vote-${blog?._id}`)
//         if (storedVote === 'upvote') {
//             setIsUpvoted(true)
//         }
//         const storedVoteCount = parseInt(localStorage.getItem(`votes-${blog?._id}`) || '0', 10)
//         setVoteCount(isNaN(storedVoteCount) ? 0 : storedVoteCount)
//     }, [blog?._id])

//     const handleDetails = () => {
//         router.push(`blogs/details/${blog?._id}`)
//     }

//     const handleBookmark = () => {
//         const newValue = !isBookmarked
//         setIsBookmarked(newValue)
//         localStorage.setItem(`bookmark-${blog?._id}`, newValue.toString())
//         toast({
//             variant: 'destructive',
//             title: 'Success',
//             description: newValue ? 'Blog bookmarked!' : 'Bookmark removed!',
//             action: (
//                 <ToastAction altText="Undo">Undo</ToastAction>
//             ),
//         })
//     }

//     const handleVote = () => {
//         const newValue = !isUpvoted
//         setIsUpvoted(newValue)
//         const newVoteCount = newValue ? voteCount + 1 : voteCount - 1
//         setVoteCount(newVoteCount)
//         localStorage.setItem(`vote-${blog?._id}`, newValue ? 'upvote' : '')
//         localStorage.setItem(`votes-${blog?._id}`, newVoteCount.toString())
//     }

//     const handleCopyLink = () => {
//         navigator.clipboard.writeText(currentUrl)
//         toast({
//             variant: 'destructive',
//             title: 'Success',
//             description: 'Link copied to clipboard!',
//             action: (
//                 <ToastAction altText="Undo">Undo</ToastAction>
//             ),
//         })
//     }
//     return (
//             <Card onClick={handleDetails} className="w-full max-w-md  outline-0 focus:ring-2 hover:bg-muted-foreground/15 ring-primary transition duration-300 rounded-md relative group">
//                 <CardHeader className="p-0 items-center">
//                     <div className="relative w-full" style={{ height: '200px' }}>
//                         <Image
//                             src={blog?.image || "/placeholder-image.jpg"}
//                             alt="Blog Image"
//                             layout="fill"
//                             objectFit="cover"
//                             quality={100}
//                             className="rounded-t-md"
//                         />
//                     </div>
//                 </CardHeader>
//                 <div className='flex justify-between items-center p-1'>
//                     <div className="flex items-center gap-2">
//                         <MyAvatar url={blog?.author?.profilePhoto || '/photo'} alt={blog?.author?.name || 'author'} />
//                         <p className="text-sm font-medium text-gray-700">{blog?.author?.name}</p>
//                     </div>
//                     <p className="text-sm text-gray-500">{formateDate(blog?.createdAt)}</p>
//                 </div>
//                 <CardContent className="p-2">
//                     <p className="text-lg font-semibold">{truncatedTitle}</p>
//                 </CardContent>
//                 <CardFooter className='flex justify-between items-center gap-2 p-2'>

//                     <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
//                         <FaWhatsapp className="w-5 h-5" />
//                     </a>
//                     <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
//                         <FaFacebook className="w-5 h-5" />
//                     </a>
//                     <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
//                         <FaLinkedin className="w-5 h-5" />
//                     </a>
//                     <Button variant="link" onClick={handleCopyLink}>
//                         <Copy className="w-5 h-5" />
//                     </Button>
//                     <Button variant="link" onClick={handleBookmark}>
//                         {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
//                     </Button>

//                     <Button variant="ghost" className='text-gray-500 font-bold' onClick={handleVote}>
//                         <ArrowBigUp className={`w-5 h-5 ${isUpvoted ? 'text-green-600' : ''}`} />
//                         {voteCount}
//                     </Button>
//                 </CardFooter>

//             </Card>
       
//     )
// }

// export default BlogCard


// 'use client'

// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
// import { MyAvatar } from '@/components/shadcn/MyAvatar'
// import { formateDate } from '@/utils/common'
// import { truncateTitle } from '@/utils/truncateTitle'
// import { Button } from '@/components/ui/button'
// import { ChevronRight, Bookmark, BookmarkCheck, Copy, ThumbsUp, ArrowBigUp } from 'lucide-react'
// import { IBlog } from '@/types/blog.type'
// import { useState, useEffect } from 'react'
// import { useToast } from '@/components/ui/use-toast'
// import { ToastAction } from '@/components/ui/toast'
// import Link from 'next/link'

// const BlogCard = ({ blog }: { blog: IBlog }) => {
//     const { toast } = useToast()
//     const router = useRouter()
//     const truncatedTitle = truncateTitle(blog?.title, 30)
//     const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/details/${blog?._id}`
//     const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${blog?.title} - ${currentUrl}`)}`
//     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?display=page&u=${encodeURIComponent(currentUrl)}`
//     const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

//     const [isBookmarked, setIsBookmarked] = useState(false)
//     const [isUpvoted, setIsUpvoted] = useState(false)
//     const [voteCount, setVoteCount] = useState(0)

//     useEffect(() => {
//         setIsBookmarked(localStorage.getItem(`bookmark-${blog?._id}`) === 'true')
//         const storedVote = localStorage.getItem(`vote-${blog?._id}`)
//         if (storedVote === 'upvote') {
//             setIsUpvoted(true)
//         }
//         const storedVoteCount = parseInt(localStorage.getItem(`votes-${blog?._id}`) || '0', 10)
//         setVoteCount(isNaN(storedVoteCount) ? 0 : storedVoteCount)
//     }, [blog?._id])

//     const handleDetails = () => {
//         router.push(`blogs/details/${blog?._id}`)
//     }

//     const handleBookmark = (e: React.MouseEvent) => {
//         e.stopPropagation()
//         const newValue = !isBookmarked
//         setIsBookmarked(newValue)
//         localStorage.setItem(`bookmark-${blog?._id}`, newValue.toString())
//         toast({
//             variant: 'destructive',
//             title: 'Success',
//             description: newValue ? 'Blog bookmarked!' : 'Bookmark removed!',
//             action: (
//                 <ToastAction altText="Undo">Undo</ToastAction>
//             ),
//         })
//     }

//     const handleVote = (e: React.MouseEvent) => {
//         e.stopPropagation()
//         const newValue = !isUpvoted
//         setIsUpvoted(newValue)
//         const newVoteCount = newValue ? voteCount + 1 : voteCount - 1
//         setVoteCount(newVoteCount)
//         localStorage.setItem(`vote-${blog?._id}`, newValue ? 'upvote' : '')
//         localStorage.setItem(`votes-${blog?._id}`, newVoteCount.toString())
//     }

//     const handleCopyLink = (e: React.MouseEvent) => {
//         e.stopPropagation()
//         navigator.clipboard.writeText(currentUrl)
//         toast({
//             variant: 'destructive',
//             title: 'Success',
//             description: 'Link copied to clipboard!',
//             action: (
//                 <ToastAction altText="Undo">Undo</ToastAction>
//             ),
//         })
//     }

//     return (
//         <Card onClick={handleDetails} className="w-full hover:cursor-pointer max-w-md outline-0 focus:ring-2 hover:bg-muted-foreground/15 ring-primary transition duration-300 rounded-md relative group">
//             <CardHeader className="p-0 items-center">
//                 <div className="relative w-full" style={{ height: '200px' }}>
//                     <Image
//                         src={blog?.image || "/placeholder-image.jpg"}
//                         alt="Blog Image"
//                         layout="fill"
//                         objectFit="cover"
//                         quality={100}
//                         className="rounded-t-md"
//                     />
//                 </div>
//             </CardHeader>
//             <div className='flex justify-between items-center p-1'>
//                 <div className="flex items-center gap-2">
//                     <MyAvatar url={blog?.author?.profilePhoto || '/photo'} alt={blog?.author?.name || 'author'} />
//                     <p className="text-sm font-medium text-gray-700">{blog?.author?.name}</p>
//                 </div>
//                 <p className="text-sm text-gray-500">{formateDate(blog?.createdAt)}</p>
//             </div>
//             <CardContent className="p-2">
//                 <p className="text-lg font-semibold">{truncatedTitle}</p>
//             </CardContent>
//             <CardFooter className='flex justify-between items-center gap-2 p-2'>
//                 <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800" onClick={(e) => e.stopPropagation()}>
//                     <FaWhatsapp className="w-5 h-5" />
//                 </a>
//                 <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" onClick={(e) => e.stopPropagation()}>
//                     <FaFacebook className="w-5 h-5" />
//                 </a>
//                 <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" onClick={(e) => e.stopPropagation()}>
//                     <FaLinkedin className="w-5 h-5" />
//                 </a>
//                 <Button variant="link" onClick={handleCopyLink}>
//                     <Copy className="w-5 h-5" />
//                 </Button>
//                 <Button variant="link" onClick={handleBookmark}>
//                     {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
//                 </Button>
//                 <Button variant="ghost" className='text-gray-500 font-bold' onClick={handleVote}>
//                     <ArrowBigUp className={`w-5 h-5 ${isUpvoted ? 'text-green-600' : ''}`} />
//                     {voteCount}
//                 </Button>
//             </CardFooter>
//         </Card>
//     )
// }

// export default BlogCard

'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MyAvatar } from '@/components/shadcn/MyAvatar'
import { formateDate } from '@/utils/common'
import { truncateTitle } from '@/utils/truncateTitle'
import { Button } from '@/components/ui/button'
import { Bookmark, BookmarkCheck, Copy, ArrowBigUp } from 'lucide-react'
import { IBlog } from '@/types/blog.type'
import { useState, useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { motion } from 'framer-motion';
import { useCountVoteMutation } from '@/redux/features/blog/blogApi'

const BlogCard = ({ blog }: { blog: IBlog }) => {
    const [voteCountNumber, { isLoading, isError }] = useCountVoteMutation()
    const { toast } = useToast()
    const router = useRouter()
    const truncatedTitle = truncateTitle(blog?.title, 30)
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/details/${blog?._id}`
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${blog?.title} - ${currentUrl}`)}`
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?display=page&u=${encodeURIComponent(currentUrl)}`
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isUpvoted, setIsUpvoted] = useState(false)

    useEffect(() => {
        setIsBookmarked(localStorage.getItem(`bookmark-${blog?._id}`) === 'true')
        setIsUpvoted(localStorage.getItem(`vote-${blog?._id}`) === 'upvote')
    }, [blog?._id])

    const handleDetails = () => {
        router.push(`blogs/details/${blog?._id}`)
    }

    const handleBookmark = (e: React.MouseEvent) => {
        e.stopPropagation()
        const newValue = !isBookmarked
        setIsBookmarked(newValue)
        localStorage.setItem(`bookmark-${blog?._id}`, newValue.toString())
        toast({
            variant: 'destructive',
            title: 'Success',
            description: newValue ? 'Blog bookmarked!' : 'Bookmark removed!',
            action: (
                <ToastAction altText="Undo">Undo</ToastAction>
            ),
        })
    }

    const handleVote = async (e: React.MouseEvent) => {
        e.stopPropagation()
        const newValue = !isUpvoted
        setIsUpvoted(newValue)
        const action = newValue ? 'upvote' : 'downvote'

        try {
            const response = await voteCountNumber({ id: blog?._id, action }).unwrap()
            localStorage.setItem(`vote-${blog?._id}`, newValue ? 'upvote' : '')
        } catch (error) {
            console.error('Error updating vote count:', error)
        }
    }

    const handleCopyLink = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigator.clipboard.writeText(currentUrl)
        toast({
            variant: 'destructive',
            title: 'Success',
            description: 'Link copied to clipboard!',
            action: (
                <ToastAction altText="Undo">Undo</ToastAction>
            ),
        })
    }

    return (
        <Card onClick={handleDetails} className="w-full max-w-md outline-0 focus:ring-2 hover:bg-muted-foreground/15 ring-primary transition duration-300 rounded-md relative group">
            <CardHeader className="p-0 items-center">
                <div className="relative w-full" style={{ height: '200px' }}>
                    <Image
                        src={blog?.image || "/placeholder-image.jpg"}
                        alt="Blog Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="rounded-t-md"
                    />
                </div>
            </CardHeader>
            <div className='flex justify-between items-center p-1'>
                <div className="flex items-center gap-2">
                    <MyAvatar url={blog?.author?.profilePhoto || '/photo'} alt={blog?.author?.name || 'author'} />
                    <p className="text-sm font-medium text-gray-700">{blog?.author?.name}</p>
                </div>
                <p className="text-sm text-gray-500">{formateDate(blog?.createdAt)}</p>
            </div>
            <CardContent className="p-2">
                <p className="text-lg font-semibold">{truncatedTitle}</p>
            </CardContent>
            <CardFooter className='flex justify-between items-center gap-2 p-2'>
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800" onClick={(e) => e.stopPropagation()}>
                    <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" onClick={(e) => e.stopPropagation()}>
                    <FaFacebook className="w-5 h-5" />
                </a>
                <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" onClick={(e) => e.stopPropagation()}>
                    <FaLinkedin className="w-5 h-5" />
                </a>
                <Button variant="link" onClick={handleCopyLink}>
                    <Copy className="w-5 h-5" />
                </Button>
                <Button variant="link" onClick={handleBookmark}>
                    {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                </Button>
                <motion.div initial={{ scale: 1 }} animate={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <Button variant="ghost" className='text-gray-500 font-bold' onClick={handleVote}>
                        <ArrowBigUp className={`w-5 h-5 ${isUpvoted ? 'text-green-600' : ''}`} />
                        {blog?.votes}
                    </Button>
                </motion.div>
            </CardFooter>
        </Card>
    )
}

export default BlogCard
