//SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTTwittaProfileImage is ERC721, Ownable{
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping(uint256=> string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("NFTTwittaProfileImage", "NTP") {}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId]= _tokenURI;

    }

    function tokenURI(uint256 tokenId) public view virtual override returns(string memory _RUri){
        require(_exists(tokenId), "The token ID  does not exits");
        _RUri= _tokenURIs[tokenId];
    }

    function getAllTokens() public view returns(RenderToken[] memory){
        uint256 latestId= _tokenIds.current();
        RenderToken[] memory res= new RenderToken[](latestId);
        for(uint256 i=0; i<= latestId; i ++){
            res[i]= RenderToken(i, _tokenURIs[i], "");
        }
        return res;
    }

    function mint(address recipient, string memory _uri) public returns(uint256){
        uint256 newId= _tokenIds.current();
        _mint(recipient, newId);
        _setTokenURI(newId, _uri);
        _tokenIds.increment();
        return newId;

    }
}

