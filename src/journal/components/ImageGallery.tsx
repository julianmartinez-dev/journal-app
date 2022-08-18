import { ImageList, ImageListItem } from "@mui/material";

interface Props{
  images?: string[];
}

export const ImageGallery= ({images} : Props) => {

  if(!images){
    return (<p>No Images to show</p>);
  }
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>  
      {
          images.map((image) => (
            <ImageListItem key={image}>
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="Imagen de la nota"
                loading="lazy"
              />
        </ImageListItem>
        ))}

    </ImageList>
  );
}