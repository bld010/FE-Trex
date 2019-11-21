import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class MapInputSecond extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder={this.props.inputValue || 'Search ...'}
          placeholderTextColor='black'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={"search"}
          listViewDisplayed="false"
          fetchDetails={true}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          onPress={(data, details = null) => {
            this.props.handlerSecondInput(data.description)
}}
          getDefaultValue={() => {
            return ""; // text input default value
          }}
          query={{
            key: "AIzaSyAl5dxa6Z0jhVTOs6SDOzxCFOLjPKweyHM",
            language: "en", // language of the results
            types: "(cities)" // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0,
              width: 350,
              marginLeft: 15,
              marginBottom: 30
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 40,
              color: 'black',
              fontSize: 20
            },
            description: {
              color: 'white',
            }
          }}
          enablePoweredByContainer={true}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          GooglePlacesSearchQuery={{
            rankby: "distance",
            types: "food"
          }}
          filterReverseGeocodingByTypes={[
            "locality",
            "administrative_area_level_3"
          ]}
          debounce={200}
        />
      </View>
    );
  }
}