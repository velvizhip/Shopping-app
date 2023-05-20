import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

test('Theme toggles correctly', () => {
  const store = mockStore({ products: [{
    "id": 9,
    "name": "GUITAR PICK SET ROMBO ORIGAMI (4 GUITAR PICKS) - 0,75 MM",
    "shortDescription": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold.",
    "description": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold. We believe shapes, materials, and textures are completely essential to fully control every chord. Guitar picks can help us achieve this. When it comes to guitar picks there are four main attributes: thickness, shape, material, and size. These attributes define 80% percent of a guitar pick. However, the last 20%, contains improvements, and attention to detail, making the playing experience much more comfortable, giving you better results, and a more enjoyable playing experience. These aspects are essential to get the most out of this guitar accessory.",
    "flashSale": true,
    "addedToCart": false,
    "wishlisted": false,
    "image": "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "price": 654,
    "quantity": 0,
    "productType": "Games",
    "specifications": [
        {"label": "Brand", "value": "Canon"}, 
        {"label": "Model Number", "value": "EOS 200D II"}, 
        {"label": "Model Name", "value": "eos200dii"},
        {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
        {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
        {"label": "Video Resolution", "value": "1920 x 1080"},
        {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
        {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
    ]
}], cart: [], wishlist: [], filterData: [{
    "id": 9,
    "name": "GUITAR PICK SET ROMBO ORIGAMI (4 GUITAR PICKS) - 0,75 MM",
    "shortDescription": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold.",
    "description": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold. We believe shapes, materials, and textures are completely essential to fully control every chord. Guitar picks can help us achieve this. When it comes to guitar picks there are four main attributes: thickness, shape, material, and size. These attributes define 80% percent of a guitar pick. However, the last 20%, contains improvements, and attention to detail, making the playing experience much more comfortable, giving you better results, and a more enjoyable playing experience. These aspects are essential to get the most out of this guitar accessory.",
    "flashSale": true,
    "addedToCart": false,
    "wishlisted": false,
    "image": "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "price": 654,
    "quantity": 0,
    "productType": "Games",
    "specifications": [
        {"label": "Brand", "value": "Canon"}, 
        {"label": "Model Number", "value": "EOS 200D II"}, 
        {"label": "Model Name", "value": "eos200dii"},
        {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
        {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
        {"label": "Video Resolution", "value": "1920 x 1080"},
        {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
        {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
    ]
}], cartItems: 0, history: [{
    "orderDate": 1678495830000,
    "orderId": 1,
    "total": 600,
    "products": [
        {
            "id": 7,
            "name": "COACH Floral Eau de Parfum - 50 ml",
            "shortDescription": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Sorbet.",
            "description": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Pineapple Sorbet. The Heart Reveals A Bouquet Of Fragrant Flowers—Rose Tea, Jasmine Sambac And Gardenia—Before An Enveloping Dry-Down To Elegant Creamy Wood, Patchouli Essence And Musky Notes. This Unique Fragrance Perfectly Embodies Coach’S Feminine, Free Spirit.",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 345,
            "quantity": 0
        }
    ]
}]});

render(
    <Provider store={store}>
      <App/>
    </Provider>
);
    //Initial theme is light theme
   //Get switch theme button
    const toggleButton = screen.getByRole('checkbox', { name: 'Switch' });
    expect(toggleButton).toBeInTheDocument();
    const lightThemeDiv = screen.getByTestId('root-div');

    expect(lightThemeDiv).toHaveClass('light-theme');

    // Click toggle button to switch to dark theme
    fireEvent.click(toggleButton);
    expect(lightThemeDiv).toHaveClass('dark-theme');

    // Click toggle button switch back to light theme
    fireEvent.click(toggleButton);
    expect(lightThemeDiv).toHaveClass('light-theme');
});
