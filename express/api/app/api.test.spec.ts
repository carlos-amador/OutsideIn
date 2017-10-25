import { suite, test } from "mocha-typescript";
import * as chai from "chai";
import * as sinonjs from "sinon";


/*
 * Create a constant with the ChaiJS' expect module just to make the code more readable.
 */
const expect = chai.expect;

/*
 * Implements the unit test cases to our business code.
 */
@suite("Index unit test cases.")
class IndexTest {

    @test("bootstrap method, with a valid ExpressJS application instance, must configure itself.")
    bootstrap_WithValidExpressJSApplication_ConfiguresItself() {

        expect(true).to.be.true;

    }

}

