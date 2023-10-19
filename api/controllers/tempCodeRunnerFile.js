if (req.user.id !== listing.userRef) {
  //   return next(errorHandler(401, "You can only edit your own listings!"));
  // }

  // try {
  //   const updatedListing = await Listing.findByIdAndUpdate(
  //     req.params.id,
  //     req.body,
  //     { new: true }
  //   );
  //   res.status(200).json(updatedListing);
  // } catch (error) {
  //   next(error);
  // }