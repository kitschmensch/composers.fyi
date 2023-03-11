<?php

class ComposerController extends BaseController
/**

 * "/composer/list" Endpoint - Get list of users

 */

{

    public function listAction()

    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $arrQueryStringParams = $this->getQueryStringParams();

        if (strtoupper($requestMethod) == 'GET') {

            try {

                $composerModel = new Composer();

                $intLimit = 20;

                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

                    $intLimit = $arrQueryStringParams['limit'];
                }

                $arrComposers = $composerModel->getComposers($intLimit);

                $responseData = json_encode($arrComposers);
            } catch (Error $e) {

                $strErrorDesc = $e->getMessage() . 'Something went wrong!';

                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {

            $strErrorDesc = 'Method not supported';

            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

        if (!$strErrorDesc) {

            $this->sendOutput(

                $responseData,

                array('Content-Type: application/json', 'HTTP/1.1 200 OK')

            );
        } else {

            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),

                array('Content-Type: application/json', $strErrorHeader)

            );
        }
    }
}
