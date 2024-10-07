import booksImage from '../../public/Images/books.jpg';
import entryImage from '../../public/Images/entry.jpg'; 
import growthImage from '../../public/Images/growth.jpg'; 
import bibleImage from  '../../public/Images/bible.jpg'; 
import painImage from  '../../public/Images/pain.jpg'; 
export default function About(){
    return(
        <div>
            <div className="text-gray-400 p-6 m-4 rounded-lg shadow-lg">
            <div className="text-center m-50"><p>Let Your Journal 
            <br/>Carry What Burdens You
        </p>
        </div>
        
        <div className='flex items-start  space-x-4 p-3 m-10'>
        <img src="/Images/book.jpg"alt="books" className="w-120 h-96"/>
        
            <span className='z-10 relative text-white'>This diary website is a personal space where I document my thoughts,<br/>
              experiences, and reflections on life. Whether it's the daily adventures,<br/> 
              musings on books, travel experiences, or just the random things that<br/> 
               inspire me, you’ll find it all here.</span>
               
               
        </div>
       
            </div>
            <div className="mt-10 grid lg:grid-cols-4 gap-10 p-20 text-white m-10">
            <div className="bg-purple-800 rounded-2xl h-96 w-64">
            <img src="/Images/entry.jpg"alt="entry" className="w-44 h-36 p-5 ml-5"/>
                <div className="p-4">
                <h1>Daily Entries:<br/> My day-to-day thoughts<br/> and experiences.</h1>
                <p className="text-black">Capture the everyday moments, thoughts, and experiences</p>
                </div>
            </div>
            <div className="bg-red-200 rounded-2xl h-96 w-64">
            <img src="/Images/growth.jpg"alt="growth" className="w-44 h-36 p-5 ml-5"/>
                <div className="p-4">
                <h1>Personal Growth:<br/>Insights learned from <br/>my personal journey.</h1>
                <p className="text-black">Track your personal development and achievements over time.</p>
                </div>
            </div>
            <div className="bg-blue-400 rounded-2xl h-96 w-64">
            <img src="/Images/bible.jpg"alt="bible" className="w-44 h-36 p-5 ml-5"/>
            <div className="p-4">
            <h1>Bible Chronicles<br/>Write About Your Bible<br/>Jorney</h1>
            <p className="text-black">Document your spiritual journey and reflections on scripture.</p>
            </div>
            </div>
            <div className="bg-green-300 rounded-2xl h-96 w-64">
            <img src="/Images/pain.jpg"alt="pain" className="w-44 h-36 p-5 ml-5"/>
                <div className="p-4">
                <h1>Pain Agony:<br/>Put Down All The<br/>Downsides of life</h1>
                <p className="text-black">A space to express and process your struggles and challenges.</p>
                </div>
                </div>
            </div>

            <div className="text-center text-gray-400"><p>Join the Journey<br/>
I hope my entries resonate with you, inspire you,<br/>
 or just give you a little peek into another person's life.<br/>
 Feel free to leave comments and share your thoughts.<br/> 
After all, a diary can be a two-way street!</p></div>



            
            
            </div>
        

    )

} 