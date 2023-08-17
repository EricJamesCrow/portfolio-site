import React from 'react';

import Card from '@/components/admin/card';
import { FaGithub } from 'react-icons/fa';
import { BsActivity } from 'react-icons/bs';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { FiGlobe } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
      <>
        <div className="w-[85%] md:w-[90%] mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <Card text={'Projects'} IconComponent={FaGithub} />
            <Card text={'Projects 2'} IconComponent={FaGithub} />
            <Card text={'Projects 3'} IconComponent={FaGithub} />
        </div>

        <div className="mt-10 w-full flex flex-col items-center justify-center lg:items-start">
            <h2 className="text-[24px] lg:text-4xl font-bold text-white lg:ml-12">Analytics</h2>
            <div style={{height: '0.25px'}} className="bg-custom-gray mt-4 w-[85%] md:w-[90%] lg:hidden"></div>
        </div>

        <div className="w-[85%] md:w-[90%] mt-4 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mb-12">
            <Card text={'Real Time Data'} IconComponent={BsActivity} />
            <Card text={'Page Views'} IconComponent={BsFileEarmarkCode} />
            <Card text={'Traffic Sources'} IconComponent={FiGlobe} />
        </div>
      </>
    );
}

export default Dashboard;
