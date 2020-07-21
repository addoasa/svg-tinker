// -----------------------------------------------------------------------------
// Enzyme ui render tests
// -----------------------------------------------------------------------------

import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideNav from "../../src/Components/SideNav";
import MenuList from "../../src/Components/MenuList";
import MenuItem from "../../src/Components/MenuItem";
import Tools from "../../src/Components/Tools";

// Apparently shallow or deep rendered components that use redux need to be wrapped with a provider and provided the redux store
import { Provider } from 'react-redux';
import store from '../../store';
configure({adapter: new Adapter()});


// -------------------------------------------------------------
// <SideNav /> tests
// -------------------------------------------------------------
describe("SIDENAV COMPONENT TESTS",()=>{
    let SideNavComponent;
    let MenuListComponent;
    let MenuItemComponent;
    
    beforeAll(()=>{
        // since the component is wrapped in a provider component, a full mount is needed in order to access the child component within <Provider />. Shallow rendering doesn't work here.
        SideNavComponent = mount(<Provider store = {store}> <SideNav /> </Provider>);

    })

    it("The nav bar should render 6 nav items",()=>{
        expect(SideNavComponent.at(0).find('.nav-item-content').length).toEqual(6);
    })

    it("Clicking on a nav menu icon should render a MenuList component which should expand the sidenav.",()=>{
        SideNavComponent.at(0).find('.nav-item-content').forEach((item,index)=>{
            item.simulate("click");
            expect(SideNavComponent.at(0).containsMatchingElement(<MenuList />)).toBeTruthy()
        });
    });

    it("Clicking on a nav menu icon should display the correct menu list.",()=>{
        const validMenuItemNames = ["new project", "save/export", "load/import", "add shapes", "transform", "settings menu"]
        SideNavComponent.at(0).find('.nav-item-content').forEach((item, index)=>{
            item.at(0).simulate("click");
            expect(SideNavComponent.at(0).find("MenuList").find("h2").text()).toBe(validMenuItemNames[index]);
        });
    });
    
    // -------------------------------------------------------------
    // <MenuList /> tests
    // -------------------------------------------------------------
    describe("MENULIST COMPONENT TESTS",()=>{

        describe("MENULIST: New Project",()=>{

        })
        describe("MENULIST: Save/Export",()=>{

        })
        describe("MENULIST: Load/Import",()=>{

        })
        describe("MENULIST: Add Shapes",()=>{
            MenuListComponent = mount(<Provider store = {store}> <MenuList currentSideNavMenuType="add shapes"/> </Provider>);
            // MenuItemComponent = mount(<Provider store = {store}> <MenuItem currentSideNavMenuType="add shapes"/> </Provider>);
            const mockHandleAddingAnSVG = jest.fn();

            it("There should be 6 items on the add shapes menu.",()=>{
                expect(MenuListComponent.at(0).find("MenuItem").length).toBe(6)
            });

            xit("Clicking on a shape under the add shapes menu should insert a new svg shape into the master reducer in redux state.",()=>{
                // MenuListComponent.at(0).find("MenuItem").forEach((item,index)=>{
                //     item.find("svg").simulate("click");
                // })
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