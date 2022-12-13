import React from "react";
import useCollapse from 'react-collapsed';

export default function BerkshireComponent() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://funnybear681.github.io/ResponsiveRedesignSite/">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./Berkshire.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    HTML and Bootstrap CSS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Berkshire Hathaway Redesign
                  </h1>
                  <p className="leading-relaxed">
                    I redesigned the Berkshire Hathaway Website to be more intuitive and maintain its simplicity; increased organization and better design simplify the use of this website.
                  </p>
                </div>
              </div>
            </a>
            <p className="heading" {...getToggleProps()}>
              {isExpanded ? 'More Info (Collapse)' : 'More Info (Expand)'}
            </p>
            <div className="collapsible">
              <div {...getCollapseProps()}>
                <b className="subheader">
                  Context
                </b>
                <div className="content">
                  My goal of this redesign was to make Berkshire Hathaway's original website more usable, learnable and memorable. As is, 
                  Berkshire Hathaway's website is quite simply difficult to navigate due to the long, unorganized clutter of links. It is
                  this quite difficult to learn and memorize, as whenever new links are added, the layout of the site changes.  
                  <a href="https://www.berkshirehathaway.com">Click here to navigate to the original site.</a>
                  
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  Our audience is not only geared towards Berkshire Investors, but also to those looking to learn more about the company,
                  as well as potential investors. It is therefore crucial that the site is easy to navigate. The current design is quite
                  simply too difficult to attract new investors and give information to users, so creating a more simple, intuitive
                  design is critical.
                </div>
                <b className="subheader">
                  Design Iterations
                </b>
                <div className="content">
                  This website had its own specific design choices I had to make. Because of the original cluttered layout, I had to find
                  a way to organize the relevant data without cluttering up the space. To do this, I chose to display much of the relevant
                  data (Message from Buffett, List of Holdings) on the front page, while keeping some of the data in the format of
                  links, but even these were more organized: stock information was grouped together and information about sustainability was
                  grouped together. Some important quick links were left at the top of the page, but they are much less cluttered.
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  All in all, this website ended up being quite well organized. The information is still presented concisely on a smaller
                  page, preserving the intent of the original page. However, it is much more organized and visually appealing.
                </div>
              </div>
            </div>
          </div>
    )
}