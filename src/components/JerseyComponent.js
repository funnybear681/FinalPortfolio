import React from "react";
import useCollapse from 'react-collapsed';

export default function JerseyComponent() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://funnybear681.github.io/cs1300development/">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./Jerseys.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    React
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Jersey Store
                  </h1>
                  <p className="leading-relaxed">
                    This jersey store provides a simple way to buy jerseys; filtering and sorting by relevant factors makes shopping for jerseys more simple and quick.
                  </p>
                </div>
              </div>
            </a>
            <p className="heading jersey-text" {...getToggleProps()}>
              {isExpanded ? 'More Info (Collapse)' : 'More Info (Expand)'}
            </p>
            <div className="collapsible">
              <div {...getCollapseProps()}>
                <b className="subheader">
                  Context
                </b>
                <div className="content">
                  My goal here was to create an easy way to buy jerseys. Many jersey websites do not offer sophisticated sorting and filtering
                  methods, which are quite useful to many individuals. People usually want to filter by team, since people like buying their 
                  favorite team's jerseys. Some people also like filtering by active/retired, and as always, sorting by price should be an option.
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  There is some precedent work, such as MLBshop.com, but this interface is actually not as intuitive or simple as one may imagine.
                  There is no obvious way to filter by price, and there is also no way to find only active or only retired players. While one can 
                  filter by team, once somebody selects a team, there is no option to change this selected team. All of these areas could be
                  improved on, and I worked on these parts specifically.
                </div>
                <b className="subheader">
                  Design Iterations
                </b>
                <div className="content">
                  One notable design choice for this iste was to keep each jersey card white. This was to follow my personal theme of keeping
                  designs as simple as possible. Having a color or gradient would have cluttered up the screen too much, and this is a classic
                  example of a simple design perhaps being the best choice. Another choice was the "reset filters" button, which solves the problem
                  described above.
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  This website, while the jersey selection is currently limited, is easily expandable to be a much improved way to buy jerseys.
                  Given a larger dataset, buying jerseys can be much simpler and quicker than on slow websites such as MLBshop.com
                </div>
              </div>
            </div>
          </div>
    )
}