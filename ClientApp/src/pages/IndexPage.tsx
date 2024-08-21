import {useAuth} from "../components/AuthProvider";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {upVariants} from "../animations";
import { motion } from "framer-motion";

function IndexPage() {
    const auth = useAuth()
    
    return <motion.div variants={upVariants} initial={'init'} animate={'show'} exit={'hide'} className={'layout'}>
        Hi {auth.user?.userName}
    </motion.div>
}

export default IndexPage;