import React from "react";
import useCollapse from 'react-collapsed';

export default function BerkshireComponent() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://react-studio-lfz1-funnybear681.vercel.app/">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./bakery.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 gallerycover">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    React
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Bakery
                  </h1>
                  <p className="leading-relaxed">
                    I created a website for a bakery, where you can add and remove items from the cart. Being simple about the design allows for ease of finding different items.
                  </p>
                </div>
              </div>
            </a>
            <p className="heading bakery-text" {...getToggleProps()}>
              {isExpanded ? 'More Info (Collapse)' : 'More Info (Expand)'}
            </p>
            <div className="collapsible">
              <div {...getCollapseProps()}>
                <b className="subheader">
                  Context
                </b>
                <div className="content">
                  This app was created as a template for a fictional bakery. It has illustrations for each item, as well as a simple
                  description for each item. Again, given more data, this could be adapted to any real bakery.
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  Many bakeries exist, but many User Interfaces could be improved. For example, many of these websites are difficult to
                  locate an option for ordering, whereas here, the UI is quite simple. There are minimal elements on the page, since the 
                  goal of the user is to order food, so these options are presented in a clear, simple and concise way without any slow,
                  less relevant elements.
                </div>
                <b className="subheader">
                  Design Iterations
                </b>
                <div className="content">
                  Due to the relative simplicity of this design, the biggest design choice was the size of the item cards. I went with
                  a size that would allow us to see a good amount of items and make it clear that there are more options while ensuring
                  that the screen isn't cluttered: the main goal is simplicity. I also chose a nice lavender color for the cards so that
                  it pops well with the illustrations.
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  As with other objects, my main goal of simplicity was accomplished quite well. Adding to cart and checking item prices 
                  and total cart price are very clear pieces of data that are presented, while there is very little excess information on 
                  the screen.
                </div>
              </div>
            </div>
          </div>
    )
}