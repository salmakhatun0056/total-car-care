import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className='p-12'>
                <h1 className='text-3xl font-bold'>SALMA KHATUN</h1>
                <h2>Address:Mukundoganti,p/o# Shernogar,(6740), Belkuchi,Sirajganj</h2>
                <p>Mobile Number: 01822830155</p>
                <p>Email Address: ummesalma0056@gmail.com</p>
            </div>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-12">
                <h2 className='text-xl font-bold my-3'>Academic Qualification</h2>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Exam title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Major Subject
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Institute
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Result
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pass.Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Duration
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                Bachelor of Arts
                            </td>
                            <td class="px-6 py-4">
                                BENGALI
                            </td>
                            <td class="px-6 py-4">
                                Sirajganj Govt. College
                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">
                                2022
                            </td>

                        </tr>
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                HSC
                            </td>
                            <td class="px-6 py-4">
                                ARTS
                            </td>
                            <td class="px-6 py-4">
                                Belkuchi College
                            </td>
                            <td class="px-6 py-4">
                                GPA 4.00 out of 5
                            </td>
                            <td class="px-6 py-4">
                                2017
                            </td>
                            <td class="px-6 py-4">
                                2015-2016
                            </td>

                        </tr>
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                SSC
                            </td>
                            <td class="px-6 py-4">
                                ARTS
                            </td>
                            <td class="px-6 py-4">
                                Shohagpur Girls High School
                            </td>
                            <td class="px-6 py-4">
                                GPA 4.22 out of 5
                            </td>

                            <td class="px-6 py-4">
                                2015
                            </td>
                            <td class="px-6 py-4">
                                2013-2014
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-12">
                <h2 className='text-xl font-bold my-3'>Training and Course Summery</h2>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Course title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Institute
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Duration
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                Learning and Earning Development Project
                            </td>
                            <td class="px-6 py-4">
                                Graphic Design
                            </td>
                            <td class="px-6 py-4">
                                Inflack Ltd.PrimeTech Solution Ltd & Spinoff Studio (jv)
                            </td>
                            <td class="px-6 py-4">
                                Bangladesh
                            </td>
                            <td class="px-6 py-4">
                                2020
                            </td>
                            <td class="px-6 py-4">
                                50 days
                            </td>

                        </tr>
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                Complete Web Development Course with Jhankar Mahbub
                            </td>
                            <td class="px-6 py-4">
                                Web Development
                            </td>
                            <td class="px-6 py-4">
                                Programming Hero
                            </td>
                            <td class="px-6 py-4">
                                Bangladesh
                            </td>
                            <td class="px-6 py-4">
                                2022
                            </td>
                            <td class="px-6 py-4">
                                6 months
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyPortfolio;