import { useGetCalls } from '@/hooks/UseGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import MeetingCard from './MeetingCard'

type Props = {
    type: 'ended' | 'upcoming' | 'recording'
}

const CallList:FC<Props> = ({type}) => {
const {endedCalls,upComingCalls,recordings,isLoading} = useGetCalls();
const router = useRouter();
const [callRecordings,setCallRecordings] = useState<CallRecording[]>([]);
const getCalls = ()=>{
    if(type === "ended"){
        return endedCalls
    }
    if(type === "recording"){
        return callRecordings
    }
    if(type === "upcoming"){
        return upComingCalls
    }else{
        return []
    }
}

const getNoCalls = ()=>{
    if(type === "ended"){
        return 'No Previous Calls'
    }
    if(type === "recording"){
        return 'No Recordings'
    }
    if(type === "upcoming"){
        return 'No Upcoming Calls'
    }else{
        return []
    }
}

const calls = getCalls();
const noCalls = getNoCalls();
  return (
    <div className='grid grid-col-1 gap-5 xl:grid-cols-2'>{calls && calls.length > 0  ? calls.map((meeting: Call | CallRecording)=>(
        <MeetingCard/>
    ))}</div>
  )
}

export default CallList