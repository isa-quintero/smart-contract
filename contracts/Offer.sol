pragma solidity ^0.8.0;

contract Offer {
    struct OfferData {
        uint256 productId;
        uint256 farmerId;
        string description;
        uint256 amount;
        uint256 price;
        uint256 initialDate;
        uint256 finalDate;
        bool validity;
        string idBlockchain;
    }

    OfferData public offerData;

    constructor(
        uint256 _productId,
        uint256 _farmerId,
        string memory _description,
        uint256 _amount,
        uint256 _price,
        uint256 _initialDate,
        uint256 _finalDate,
        bool _validity,
        string memory _idBlockchain
    ) {
        offerData = OfferData(
            _productId,
            _farmerId,
            _description,
            _amount,
            _price,
            _initialDate,
            _finalDate,
            _validity,
            _idBlockchain
        );
    }

    function getOfferData() public view returns (OfferData memory) {
        return offerData;
    }
}
