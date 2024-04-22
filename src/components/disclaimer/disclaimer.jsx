import React from 'react'
import './disclaimer.css'

const Disclaimer = ({ setIsDisclaimerWatched }) => {
    return (
        <div className='modal'>
            <div class="modal-content">
                As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit their work or advertise in any manner. By clicking on the “I Agree” button, the user agrees and acknowledges as under:

                · There has been no advertisement, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of Legal Inkwell or any of its members to solicit any work through this website.

                · All material and information (except any statutory instruments or judicial precedents) on this website is the property of Legal Inkwell, and no part thereof shall be used, with or without adaptation, without the express prior written consent or approval from Legal Inkwell.

                · The user(s) wishes to gain more information about Legal Inkwell for his/her/their own information and use.

                · All information about Legal Inkwell on this website is being provided to the user(s) only on his/her/their specific request and any information obtained or materials downloaded from this website is completely at the volition of user(s); and any transmission, receipt or use of this site would not create any lawyer-client relationship.

                · The information provided on this website is solely available at the request of the user(s) for informational purposes only. It should not be interpreted as a soliciting or advertisement.

                · Legal Inkwell assumes no liability for the interpretation and/or use of the information available on this website, neither does it offer a warranty of any kind, nor express or implicit authorization of the content included in www.legalinkwell.com not even through a hyperlink, without express and written consent from www.legalinkwell.com.

                · The content available on this website does not constitute, and shall not be construed, as legal advice or a substitute for legal advice.

                · Legal Inkwell is not liable for any consequence of any action taken by the user(s) relying on material/information provided on this website or through any external links thereon.

                · This website is a resource for informational purposes only and though intended, is not promised or guaranteed, to be complete or updated. Legal Inkwell does not warrant that the information contained on this website is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause.

                <div>
                    <button onClick={() => setIsDisclaimerWatched(true)} >Accept</button>
                    <button onClick={() => setIsDisclaimerWatched(false)}>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer