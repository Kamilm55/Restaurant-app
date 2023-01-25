import { render , screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Testing for booking form static text' ,() =>{
    render(<BookingForm/>);
    const label1 = screen.getByText("Choose date");
    expect(label1).toBeInTheDocument();
})
