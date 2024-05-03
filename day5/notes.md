/**
 * What component our app can have
 * 
 * -Header
 *      -logo
 *      -nav items
 * -Body
 *      -Search
 *      -RestaurantContainer
 *          -RestaurantCard component
 *              - image, res name, cuisine, delivery time, rating
 * -footer
 *      -Copyrights
 *      -Address
 *      -Contacts
 */

 Two types of Export/Import

 -export default Component;
 import Component from "path";

 -export const Component = ()=>{}
 import {Component} from "path"

 note: On importing JS variables like CDN_URL or CDN_LOGO it will work on using if used inside {}