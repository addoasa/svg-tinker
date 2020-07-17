// -----------------------------------------------------------------------------
// Enzyme ui render tests
// -----------------------------------------------------------------------------
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SideNav}  from "../../src/Components/SideNav";
import MenuList from "../../src/Components/MenuList";
import MenuItem from "../../src/Components/MenuItem";



describe("SIDENAV COMPONENT TESTS",()=>{

    it("Clicking on a nav menu icon should display the correct menu list.",()=>{
        expect(true).toBeTruthy();
    });
    
    describe("MENULIST COMPONENT TESTS",()=>{

        describe("MENULIST: New Project",()=>{

        })
        describe("MENULIST: Save/Export",()=>{

        })
        describe("MENULIST: Load/Import",()=>{

        })
        describe("MENULIST: Add Shapes",()=>{

            xit("Clicking on a menu item should trigger the handleAddingAnSVG() function.",()=>{
        
            });

        })
        describe("MENULIST: Transform",()=>{

        })
        describe("MENULIST: Settings Menu",()=>{

        })
        
    
        describe("MENUITEM COMPONENT TESTS",()=>{
        
        });

    });

});